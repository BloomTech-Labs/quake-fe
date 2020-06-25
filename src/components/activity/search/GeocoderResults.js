import React from "react";
import { connect } from "react-redux";
import { updateSearchParams } from "../../../actions";

const SearchBarResults = ({ updateSearchParams, feature, clearResults }) => {
  // Sets coords and place name to state when autocomplete result is selected
  const submitLocation = () => {
    console.log(
      "LOGGING FEATURE COORDS: ",
      feature.place_name,
      feature.geometry.coordinates
    );
    updateSearchParams({
      name: "placename",
      value: feature.place_name,
    });

    updateSearchParams({
      name: "latitude",
      value: feature.geometry.coordinates[1],
    });

    updateSearchParams({
      name: "longitude",
      value: feature.geometry.coordinates[0],
    });
    clearResults(); // Function passed from parent that clears the autocomplete results
  };

  return <p onClick={submitLocation}>{feature.place_name}</p>;
};

const mapStateToProps = (state, ownProps) => {
  // ownProps allows the setting of props being passed down from a parent to state along side store props
  return {
    feature: ownProps.feature,
    clearResults: ownProps.clearResults,
  };
};

export default connect(mapStateToProps, {
  updateSearchParams,
})(SearchBarResults);
