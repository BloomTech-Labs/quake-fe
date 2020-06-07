import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

function List({ quakes, quakeFetch, quakeFetchError }) {
  if (quakeFetchError === false) {
    console.log("No Fetch Error", quakeFetchError);
    if (quakeFetch === false) {
      console.log("Not Fetching Quakes", quakeFetch);
      if (quakes.length === 0) {
        console.log("No Quakes", quakes);
        return <div>Looks Like We Couldn't Find Any Quakes...</div>;
      } else {
        console.log("Have Quakes", quakes);
        return quakes.map((quake, index) => {
          return <Card quake={quake} number={index} key={index} />;
        });
      }
    } else {
      console.log("Fetching Quakes", quakeFetch);
      return <div>Fetching Quakes...</div>;
    }
  } else {
    console.log("Fetch Error", quakeFetchError);
    return <div>There was a problem getting your quakes...</div>;
  }
}

const mapPropsToState = (state) => {
  return {
    quakes: state.quakeReducer.quakes,
    quakeFetch: state.quakeReducer.quakeFetch,
    quakeFetchError: state.quakeReducer.quakeFetchError,
  };
};

export default connect(mapPropsToState, {})(List);
