import React, { useEffect, useRef } from "react";
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
  // Toggles Dark Mode CSS theme. See src/customHooks/useDarkMode.js
  const [darkMode, setDarkMode] = useDarkMode("dark-mode");

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  // Set Ref for off click to close search.
  const searchRef = useRef(null);

  function onClickRef(e) {
    const isOutside = searchRef.current.contains(e.target);

    if (isOutside === false) {
      toggleSearch();
    }
  }

  // The query parameters to be sent to USGS. Updates with state changes
  const USGSQuery = `&starttime=${starttime}&endtime=${endtime}&minmagnitude=${minmagnitude}&maxmagnitude=${maxmagnitude}&maxradiuskm=${maxradiuskm}&latitude=${latitude}&longitude=${longitude}`;

  // Initial Quake Search, runs on first load
  useEffect(() => {
    quakeFetch(USGSQuery);
  }, []);

  // dispatches quakeFetch actions with the query for USGS upon form submit
  const formSubmitCallback = (e) => {
    e.preventDefault();
    toggleSearch();
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

  // Toggles the advanced search filters dropdown.
  const toggleAdvanced = (e) => {
    e.preventDefault();
    const advancedFilters = document.getElementById("advanced-filters");
    advancedFilters.style.display === "flex"
      ? (advancedFilters.style.display = "none")
      : (advancedFilters.style.display = "flex");
  };

  const toggleSearch = () => {
    // Toggles visibility of search menu
    const searchMenu = document.getElementById("search-menu");
    searchMenu.style.display === "block"
      ? (searchMenu.style.display = "none")
      : (searchMenu.style.display = "block");
  };

  const onEnter = (e) => {
    if(e.keyCode == 13) {
      toggleDarkMode
    }
  }

  return (
    <dialog
      id="search-menu"
      role="dialog"
      onClick={onClickRef}
      className="search-menu"
    >
      <form ref={searchRef} onSubmit={formSubmitCallback}>
        <fieldset className="search-bar-field">
          <legend tabIndex="0">Earthquake Search</legend>

          <SearchBar />

          <button onClick={toggleAdvanced} className="more-options-button">
            More Options
          </button>
        </fieldset>

        <fieldset id="advanced-filters" className="advanced-filters">
          <legend>Advanced Filters</legend>

          <fieldset className="radius-field">
            <legend>Search Radius:</legend>

            <label htmlFor="kilometers">
              Kilometers
              <input
                id="kilometers"
                type="number"
                name="maxradiuskm"
                onChange={handleChanges}
                value={maxradiuskm}
                min="1"
                max="20001.6"
                step="0.1"
              />
            </label>
          </fieldset>

          <fieldset className="date-field">
            <legend>Date Range:</legend>

            <label htmlFor="start-date">
              Start
              <input
                id="start-date"
                type="date"
                name="starttime"
                onChange={handleChanges}
                value={starttime}
              />
            </label>

            <label htmlFor="end-date">
              End
              <input
                id="end-date"
                type="date"
                name="endtime"
                onChange={handleChanges}
                value={endtime}
              />
            </label>
          </fieldset>

          <fieldset className="mag-field">
            <legend>Magnitude Range:</legend>

            <label htmlFor="start-magnitude">
              Start
              <input
                id="start-magnitude"
                type="number"
                name="minmagnitude"
                min="0"
                max="10"
                step="0.1"
                onChange={handleChanges}
                value={minmagnitude}
              />
            </label>

            <label htmlFor="end-magnitude">
              End
              <input
                id="end-magnitude"
                type="number"
                name="maxmagnitude"
                min="0"
                max="10"
                step="0.1"
                onChange={handleChanges}
                value={maxmagnitude}
              />
            </label>
          </fieldset>
        </fieldset>

        <button type="submit" className="search-submit-button">
          Search For Activity
        </button>

        <p tabIndex="0" className="close-sort" onClick={toggleSearch}>
          Close
        </p>

        <aside tabIndex="0" aria-label="dark mode toggle" className="dark-mode-toggle">
          <div
            onClick={toggleDarkMode}
            className={darkMode ? "toggle-switch toggled" : "toggle-switch"}
            onKeyPress={onEnter}
          />
        </aside>
      </form>
    </dialog>
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
