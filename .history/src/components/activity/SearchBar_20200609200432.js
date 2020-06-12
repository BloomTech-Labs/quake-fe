import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateSearchParams } from "../../actions";
import axios from "axios";
import SearchBarResults from "./SearchBarResults";

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

  return (
    <div className="geocoder-container">
      <input
        role="search"
        type="text"
        name="placename"
        onChange={handleChanges}
        value={placename}
        placeholder="Search"
        maxLength="256"
        className="search-bar"
        ARIA-label="input location"
      />
      <React.Fragment className="search-results">
        {geocodeResults.map((feature) => {
          return (
            <select id="locations" aria-label="location results">
              <option>
                <SearchBarResults
                  feature={feature}
                  clearResults={clearResults}
                />
              </option>
            </select>
          );
        })}
      </React.Fragment>
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
