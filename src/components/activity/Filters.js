import React, { useEffect } from "react";
import { connect } from "react-redux";
import { quakeFetch, updateSearchParams } from "../../actions";
import SearchBar from "./SearchBar";

function Filters({
  quakeFetch,
  updateSearchParams,
  maxradiuskm,
  starttime,
  endtime,
  minmagnitude,
  maxmagnitude,
  latitude,
  longitude,
}) {

  console.log('In Filters.js, Here Is State',
  maxradiuskm,
  starttime,
  endtime,
  minmagnitude,
  maxmagnitude,
  latitude,
  longitude);

  useEffect(() => {
    const initialQuery = `&starttime=${starttime}&endtime=${endtime}&minmagnitude=${minmagnitude}&maxmagnitude=${maxmagnitude}&maxradiuskm=${maxradiuskm}&latitude=${latitude}&longitude=${longitude}`;
    quakeFetch(initialQuery);
  }, []);

  const formSubmitCallback = (e) => {
    e.preventDefault();
    const newQuery = `&starttime=${starttime}&endtime=${endtime}&minmagnitude=${minmagnitude}&maxmagnitude=${maxmagnitude}&maxradiuskm=${maxradiuskm}&latitude=${latitude}&longitude=${longitude}`;

    quakeFetch(newQuery);
  };

  const handleChanges = (e) => {
    e.preventDefault();
    const theParams = {
      name: e.target.name,
      value: e.target.value,
    };
    updateSearchParams(theParams);
  };

  return (
    <div className="search-menu">
      <form onSubmit={formSubmitCallback}>
        <SearchBar />

        <label>Search Radius &#40;km&#41;</label>

        <input
          type="number"
          name="maxradiuskm"
          onChange={handleChanges}
          value={maxradiuskm}
          min="1"
          max="20001.6"
          step="0.1"
        />

        <label>Date Range</label>

        <input
          type="date"
          name="starttime"
          onChange={handleChanges}
          value={starttime}
        />

        <input
          type="date"
          name="endtime"
          onChange={handleChanges}
          value={endtime}
        />

        <label>Magnitude</label>

        <input
          type="number"
          name="minmagnitude"
          min="0"
          max="10"
          step="0.1"
          onChange={handleChanges}
          value={minmagnitude}
        />

        <input
          type="number"
          name="maxmagnitude"
          min="0"
          max="10"
          step="0.1"
          onChange={handleChanges}
          value={maxmagnitude}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    starttime: state.searchReducer.starttime,
    endtime: state.searchReducer.endtime,
    minmagnitude: state.searchReducer.minmagnitude,
    maxmagnitude: state.searchReducer.maxmagnitude,
    maxradiuskm: state.searchReducer.maxradiuskm,
    latitude: state.searchReducer.latitude,
    longitude: state.searchReducer.longitude,
  };
};

export default connect(mapStateToProps, {
  quakeFetch,
  updateSearchParams
})(Filters);
