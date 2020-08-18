import React from "react";
import MediaQuery from "react-responsive";
import Filters from "./filters/Filters";
import SearchBar from "./search/SearchBar";
import ResultsContainer from "./results/ResultsContainer";
import MapContainer from "./map/MapContainer";

const Activity = () => {
  return (
    <div className="main-container no-scroll">
      <MediaQuery maxWidth={799}>
        <SearchBar />
      </MediaQuery>

      <Filters />
      <ResultsContainer />
      <MapContainer />
    </div>
  );
};

export default Activity;
