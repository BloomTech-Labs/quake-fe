import React from "react";
import { connect } from "react-redux";
import { quakeSort } from "../../../actions/index.js";

function Sort({ quakeSort, quakes, sortBy }) {
  const handleChanges = (e) => {
    e.preventDefault();
    sortBy = e.target.value;
    quakeSort(sortBy, quakes);
  };

  return (
    <div className="sort-bar">
      <label>
        Sort by:
        <select id="sort-input" onChange={handleChanges}>
          <option value="newest">Time: Newest First</option>
          <option value="oldest">Time: Oldest First</option>
          <option value="ascending magnitude">Magnitude: Lowest First</option>
          <option value="descending magnitude">Magnitude: Highest First</option>
          <option value="closest depth">Depth: Closest First</option>
          <option value="furthest depth">Depth: Furthest First</option>
        </select>
      </label>

      <h1 className="quake-ammount">{quakes.length} Results</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sortBy: state.quakeReducer.sortBy,
    quakes: state.quakeReducer.quakes,
  };
};

export default connect(mapStateToProps, {
  quakeSort,
})(Sort);
