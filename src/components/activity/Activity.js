import React from "react";
import Filters from "./Filters";
// import List from "./results/List";

import SearchBar from "./search/SearchBar";
import ResultsContainer from "./results/ResultsContainer";
// import Sort from "./results/Sort";
import MapContainer from "./map/MapContainer";

const Activity = () => {
  return (
    <div className="main-container no-scroll">
      <SearchBar />
      <Filters /> {/* As a popup menu that overlays the list when open but not the search bar */}
      {/* <Sort />Place this inside of the list at the very top */}
      {/* <List /> */}
      <ResultsContainer />
      <MapContainer /> 
    </div>
  );
};

export default Activity;
