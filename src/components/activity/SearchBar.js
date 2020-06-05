import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBarResults from "./SearchBarResults";

// STILL NEED TO CLEAN UP INPUT BY NOT ALLOWING ';'!!!!!!

const SearchBar = () => {
  const [searchState, setSearchState] = useState({
    searchTerm: "",
    encoded: "",
  });

  const [geoState, setGeoState] = useState([]);

  const handleChanges = (e) => {
    e.preventDefault();
    setSearchState({
      ...searchState,
      searchTerm: e.target.value,
      encoded: encodeURI(e.target.value),
    });
  };

  useEffect(() => {
    if (searchState.searchTerm.length > 2) {
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchState.encoded}.json?access_token=${process.env.REACT_APP_MAP_API_TOKEN}&autocomplete=true&limit=5`
        )
        .then((res) => {
          // console.log(res);
          setGeoState(res.data.features);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    } else {
      setGeoState([]); // This gets rid of the mapped results
    }
  }, [searchState.searchTerm]);

  console.log("SEARCH STATE!", searchState, searchState.encoded);
  console.log("GEO STATE!", geoState);
  // console.log(process.env.REACT_APP_MAP_API_TOKEN);
  //   console.log(`https://api.mapbox.com/geocoding/v5/mapbox.places/${geoState.encoded}.json?limit=5?access_token=${process.env.REACT_APP_MAP_API_TOKEN}`);

  //   The feature you’re trying to look up. This could be an address, a point of interest name, a city name, etc. When searching for points of interest, it can also be a category name (for example, “coffee shop”). For information on categories, see the Point of interest category coverage section. The search text should be expressed as a URL-encoded UTF-8 string, and must not contain the semicolon character (either raw or URL-encoded). Your search text, once decoded, must consist of at most 20 words and numbers separated by spacing and punctuation, and at most 256 characters.

  return (
    <div className="geocoder-container">
      <input
        type="text"
        name="geocoder"
        onChange={handleChanges}
        value={searchState.searchTerm}
        placeholder="Search"
        maxLength="256"
        className="search-bar"
      />
      <div className="search-results">
        {geoState.map((feature) => {
          return <Results feature={feature} />;
        })}
      </div>
    </div>
  );
};

export default SearchBar;
