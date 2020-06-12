import React, { useEffect } from "react";
import { connect } from "react-redux";
import { quakeFetch, updateSearchParams } from "../../actions";
import SearchBar from "./SearchBar";
import useDarkMode from "../../customHooks/useDarkMode";

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
  const [darkMode, setDarkMode] = useDarkMode(false);
  // The query parameters to be sent to USGS. Updates with state changes
  const USGSQuery = `&starttime=${starttime}&endtime=${endtime}&minmagnitude=${minmagnitude}&maxmagnitude=${maxmagnitude}&maxradiuskm=${maxradiuskm}&latitude=${latitude}&longitude=${longitude}`;

  // Initial Quake Search, runs on first load
  useEffect(() => {
    quakeFetch(USGSQuery);
  }, []);

  // dispatches quakeFetch actions with the query for USGS upon form submit
  const formSubmitCallback = (e) => {
    e.preventDefault();

    quakeFetch(USGSQuery);
  };

  // Updates the search state dynamically for each input due to shared key names
  const handleChanges = (e) => {
    e.preventDefault();

    updateSearchParams({
      name: e.target.name,
      value: e.target.value,
    });
  };

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <>
      <form onSubmit={formSubmitCallback} className="search-menu" id="search-menu">
        <SearchBar />

        <label htmlFor="searchRadius">Search Radius &#40;km&#41;</label>

        <input
          id="searchRadius"
          type="number"
          name="maxradiuskm"
          onChange={handleChanges}
          value={maxradiuskm}
          min="1"
          max="20001.6"
          step="0.1"
        />

        <label htmlFor="dateRange">Date Range</label>

        <input
          id="dateRange"
          type="date"
          name="starttime"
          onChange={handleChanges}
          value={starttime}
        />

        <input
          id="dateRange"
          type="date"
          name="endtime"
          onChange={handleChanges}
          value={endtime}
        />

        <label htmlFor="magnitude">Magnitude</label>

        <input
          id="magnitude"
          type="number"
          name="minmagnitude"
          min="0"
          max="10"
          step="0.1"
          onChange={handleChanges}
          value={minmagnitude}
        />

        <input
          id="magnitude"
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
      <div className="dark-mode-toggle">
        <div
          onClick={toggleDarkMode}
          className={darkMode ? "toggle-switch toggled" : "toggle-switch"}
        />
      </div>
    </>
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
  updateSearchParams,
})(Filters);
