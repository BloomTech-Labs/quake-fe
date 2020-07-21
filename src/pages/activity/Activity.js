import React from "react";
import Filters from "./filters/Filters";
import SearchBar from "./search/SearchBar";
import ResultsContainer from "./results/ResultsContainer";
import MapContainer from "./map/MapContainer";

const Activity = () => {
  return (
    <div className="main-container no-scroll">
      <SearchBar />
      <Filters />
      <ResultsContainer />
      <MapContainer />
    </div>
  );
};

export default Activity;
