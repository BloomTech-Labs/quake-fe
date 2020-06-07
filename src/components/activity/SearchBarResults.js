import React from "react";
import { connect } from "react-redux";
import { updateSearchParams } from "../../actions";

const SearchBarResults = ({ updateSearchParams, feature, clearResults }) => {
  const submitLocation = () => {
    console.log(
      "LOGGING FEATURE COORDS: ",
      feature.place_name,
      feature.geometry.coordinates
    );
    updateSearchParams({
      name: "placename",
      value: feature.place_name
    });

    updateSearchParams({
      name: "latitude",
      value: feature.geometry.coordinates[0]
    });
    
    updateSearchParams({
      name: "longitude",
      value: feature.geometry.coordinates[1]
    });
    clearResults();
  };

  return <p onClick={submitLocation}>{feature.place_name}</p>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    feature: ownProps.feature,
    clearResults: ownProps.clearResults
  };
};

export default connect(mapStateToProps, {
  updateSearchParams
})(SearchBarResults);