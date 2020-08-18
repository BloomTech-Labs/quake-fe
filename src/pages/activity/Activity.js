import React, {Fragment} from "react";
import MediaQuery from "react-responsive";
import Filters from "./filters/Filters";
import SearchBar from "./search/SearchBar";
import ResultsContainer from "./results/ResultsContainer";
import MapContainer from "./map/MapContainer";

const Activity = () => {
  return (
    <Fragment>
      <MediaQuery minWidth={800}>
        <SearchBar />
      </MediaQuery>
      <div className="main-container no-scroll activity-page">
        <MediaQuery maxWidth={799}>
          <SearchBar />
        </MediaQuery>
        <Filters />
        <ResultsContainer />
        <MapContainer />
      </div>
    </Fragment>
    
  );
};

export default Activity;
