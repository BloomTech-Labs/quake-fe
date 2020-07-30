import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { firstLoad, quakeFetch, updateSearchParams } from "../../../redux/actions";
import QuickFilters from './quickFilters'
import RadiusFilter from './radiusFilter'
import DateFilter from "./dateFilter";
import MagFilter from "./magFilter";
 
function Filters({
 quakeFetch,
 firstLoad,
 updateSearchParams,
 maxradiuskm,
 starttime,
 endtime,
 minmagnitude,
 maxmagnitude,
 latitude,
 longitude,
}) {
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
 const firstLoadQuery = "https://quakelabs-be-production.herokuapp.com/api/activity/first-load";
 
 // Initial Quake Search, runs on first load
 useEffect(() => {
   firstLoad(firstLoadQuery, USGSQuery, quakeFetch);
   console.log('Filters.js > first load...');
 }, []);


  // dispatches quakeFetch actions with the query for USGS upon form submit
  const formSubmitCallback = (e) => {
    e.preventDefault();
    quakeFetch(USGSQuery);
  };

  // quick filters
  const quickFilters = (e) => {
    e.preventDefault();
    console.log('request coming?', e.target.name)
    firstLoad(e.target.name, USGSQuery, quakeFetch);
    toggleSearch();
  }

  // Updates the search state dynamically for each input due to shared key names
  const handleChanges = (e) => {
    e.preventDefault();

    updateSearchParams({
      name: e.target.name,
      value: e.target.value,
    });
  };

  const toggleSearch = () => {
    // Toggles visibility of search menu
    const searchMenu = document.getElementById("search-menu");
    searchMenu.style.display === "block"
      ? (searchMenu.style.display = "none")
      : (searchMenu.style.display = "block");
  };

  return (
    <dialog id="search-menu" onClick={onClickRef} className="search-menu">
      <form ref={searchRef} onSubmit={formSubmitCallback} name="filters-form">
        <QuickFilters quickFilters={quickFilters}/>
        <fieldset id="advanced-filters" className="advanced-filters">
          <legend id='advanced-filters-label'>Advanced Filters</legend>
          <RadiusFilter handleChanges={handleChanges} maxradiuskm={maxradiuskm}/>
          <DateFilter handleChanges={handleChanges} starttime={starttime} endtime={endtime}/>
          <MagFilter handleChanges={handleChanges} minmagnitude={minmagnitude} maxmagnitude={maxmagnitude}/>
        </fieldset>

        <button type="submit" onClick={toggleSearch} className="search-submit-button">
          Search For Activity
        </button>

        <p type="button" role="button" className="close-sort" onClick={toggleSearch}>
          Close
        </p>
        
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
  firstLoad,
  quakeFetch,
  updateSearchParams,
})(Filters);
