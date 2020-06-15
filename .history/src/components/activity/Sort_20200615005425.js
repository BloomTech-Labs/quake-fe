import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { quakeSort } from "../../actions/index.js";

function Sort({ quakeSort, quakes, sortBy }) {
  const [sortClicked, setSortClicked] = useState(false);

  const handleChanges = (e) => {
    e.preventDefault();
    sortBy = e.target.value;
    console.log(sortBy);
    quakeSort(sortBy, quakes);
    setSortClicked(false);
  };

  useEffect(() => {
    console.log("IN SORT.JS LOGGIN SORT STATE", sortBy);
  }, [sortBy]);

  return (
    <>
      <aside className={!sortClicked ? "page-fade-off" : "page-fade-on"} />
      <label className="sort-bar" htmlFor="sort-input">
        <h3
          tabIndex="0"
          type="button"
          role="button"
          onClick={() => {
            setSortClicked((sortClicked) => !sortClicked);
          }}
        >
          Sort Results
        </h3>
      </label>

      <div className={!sortClicked ? "sort-input-closed" : "sort-input-open"}>
        <form role="form" className="sort-input">
          <h1 tabIndex="0" className="sort-text">
            Sort by:
          </h1>
          <select
            id="sort-input"
            className="sort-dropdown"
            name="sort"
            onChange={handleChanges}
            tabIndex="0"
          >
            <option tabIndex="0" value="newest">Time: Newest First</option>
            <option tabIndex="0" value="oldest">Time: Oldest First</option>
            <option tabIndex="0" value="ascending magnitude">Magnitude: Lowest First</option>
            <option tabIndex="0" value="descending magnitude">
              Magnitude: Highest First
            </option>
          </select>
          <p
            className="close-sort"
            onClick={() => {
              setSortClicked((sortClicked) => !sortClicked);
            }}
          >
            Close
          </p>
        </form>
      </div>
    </>
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
