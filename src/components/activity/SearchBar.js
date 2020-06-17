import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateSearchParams } from "../../actions";
import axios from "axios";
import SearchBarResults from "./SearchBarResults";
import location from "../../utils/UserLocation";

// STILL NEED TO CLEAN UP INPUT BY NOT ALLOWING ';'!!!!!!
// Also make sure when hitting enter to select first auto correct result or do so when leaving focus of input

const SearchBar = ({ updateSearchParams, placename }) => {
  const [encodedSearch, setEncodedSearch] = useState(""); // Holds the URI encoded search text

  const [geocodeResults, setGeocodeResults] = useState([]); // Holds array of autocomplete results from MapBox Geocode API

  const handleChanges = (e) => {
    e.preventDefault();

    updateSearchParams({
      name: e.target.name,
      value: e.target.value,
    });

    setEncodedSearch(encodeURI(e.target.value));
  };

  useEffect(() => {
    if (placename.length > 2) {
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedSearch}.json?access_token=${process.env.REACT_APP_MAP_API_TOKEN}&autocomplete=true&limit=5`
        )
        .then((res) => {
          setGeocodeResults(res.data.features);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    } else {
      clearResults(); // This gets rid of the mapped results
    }
  }, [encodedSearch]);

  const clearResults = () => {
    // Clears the array of autocomplete results getting rid of the list that renders
    setGeocodeResults([]);
  };

  const handleEnter = (e) => {
    // If the user hits enter instead of selecting a result, this function passes the first suggestion into state
    if (e.which === 13 || e.keyCode === 13) {
      e.preventDefault();
      if (geocodeResults.length > 1) {
        console.log(
          "LOGGING FEATURE COORDS: ",
          geocodeResults[0].place_name,
          geocodeResults[0].geometry.coordinates
        );
        updateSearchParams({
          name: "placename",
          value: geocodeResults[0].place_name,
        });

        updateSearchParams({
          name: "latitude",
          value: geocodeResults[0].geometry.coordinates[1],
        });

        updateSearchParams({
          name: "longitude",
          value: geocodeResults[0].geometry.coordinates[0],
        });

        clearResults();
      }
    }
  };

  const updateGeoLocation = (e) => {
    // e.preventDefault();
    setGeocodeResults([]);

    location.setGps(() => {
      const latestCoords = JSON.parse(location.getGps());
      console.log("latestCordsLat", latestCoords.latitude);
      console.log("latestCordsLong", latestCoords.longitude);

      updateSearchParams({
        name: "latitude",
        value: latestCoords.latitude,
      });

      updateSearchParams({
        name: "longitude",
        value: latestCoords.longitude,
      });
    });
  };

  return (
    <div className="geocoder-container">
      <input
        role="search"
        type="text"
        name="placename"
        onChange={handleChanges}
        onKeyPress={handleEnter}
        value={placename}
        placeholder="Search"
        maxLength="256"
        className="search-bar"
        aria-label="input location"
        autoComplete="off"
      />
      <button className="geo-location" onClick={() => updateGeoLocation()} />
      <aside className="search-results">
        {geocodeResults.map((feature) => {
          return (
            <SearchBarResults
              key={feature.place_name}
              feature={feature}
              clearResults={clearResults}
            />
          );
        })}
      </aside>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    placename: state.searchReducer.placename,
  };
};

export default connect(mapStateToProps, {
  updateSearchParams,
})(SearchBar);
