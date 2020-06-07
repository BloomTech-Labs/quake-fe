import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateSearchParams } from "../../actions";
import axios from "axios";
import SearchBarResults from "./SearchBarResults";

// STILL NEED TO CLEAN UP INPUT BY NOT ALLOWING ';'!!!!!!
// Also make sure when hitting enter to select first auto correct result or do so when leaving focus of input

const SearchBar = ({ updateSearchParams, placename }) => {
  const [encodedSearch, setEncodedSearch] = useState("");

  const [geocodeResults, setGeocodeResults] = useState([]);

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
          // console.log(res);
          setGeocodeResults(res.data.features);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    } else {
      setGeocodeResults([]); // This gets rid of the mapped results
    }
  }, [encodedSearch]);

  const clearResults = () => {
    setGeocodeResults([]);
  }

  console.log("ENCODED SEARCH STATE!", encodedSearch);
  console.log("GEOCODE RESULTS STATE!", geocodeResults);
  // console.log(process.env.REACT_APP_MAP_API_TOKEN);
  //   console.log(`https://api.mapbox.com/geocoding/v5/mapbox.places/${geoState.encoded}.json?limit=5?access_token=${process.env.REACT_APP_MAP_API_TOKEN}`);

  //   The feature you’re trying to look up. This could be an address, a point of interest name, a city name, etc. When searching for points of interest, it can also be a category name (for example, “coffee shop”). For information on categories, see the Point of interest category coverage section. The search text should be expressed as a URL-encoded UTF-8 string, and must not contain the semicolon character (either raw or URL-encoded). Your search text, once decoded, must consist of at most 20 words and numbers separated by spacing and punctuation, and at most 256 characters.

  return (
    <div className="geocoder-container">
      <input
        type="text"
        name="placename"
        onChange={handleChanges}
        value={placename}
        placeholder="Search"
        maxLength="256"
        className="search-bar"
      />
      <div className="search-results">
        {geocodeResults.map((feature) => {
          return <SearchBarResults feature={feature} clearResults={clearResults} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    placename: state.searchReducer.placename
  };
};

export default connect(mapStateToProps, {
  updateSearchParams
})(SearchBar);
