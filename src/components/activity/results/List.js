import React from "react";
import { connect } from "react-redux";
import { ReactComponent as CracksImage } from "../../../images/cracks.svg";
import { ReactComponent as SearchImage } from "../../../images/search.svg";
import Card from "./Card";

function List({ quakes, quakeFetch, quakeFetchError }) {
  if (quakeFetchError === false) {
    if (quakeFetch === false) {
      if (quakes.length === 0) {
        return (
          <div className="alt-result">
            <CracksImage className="result-image" />
            <h1>Aww SHOCKS!</h1>
            <p>Looks like there aren't any quakes here.</p>
            <p>Why not adjust your filters or try a new location?</p>
          </div>
        );
      } else {
        return (
          <>
            {quakes.map((quake, index) => {
              return <Card quake={quake} number={index} key={index} />;
            })}
          </>
        );
      }
    } else {
      return (
        <div className="alt-result">
          <SearchImage className="result-image" />
          <h1>Searching for quakes...</h1>
        </div>
      );
    }
  } else {
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
