import React from "react";

const SearchBarResults = ({ feature }) => {
  const logCoords = () => {
    console.log(
      "LOGGING FEATURE COORDS: ",
      feature.place_name,
      feature.geometry.coordinates
    );
  };

  return <p onClick={logCoords}>{feature.place_name}</p>;
};

export default SearchBarResults;
