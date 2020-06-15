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
        <dialog className="sort-input">
          <h1 tabIndex="0" className="sort-text">
            Sort by:
          </h1>
          <select
            id="sort-input"
            className="sort-dropdown"
            onChange={handleChanges}
          >
            <option value="newest">
              <p>Time: Newest First</p>
            </option>
            <option value="oldest">
              <p>Time: Oldest First</p> 
            </option>
            <option value="ascending magnitude">
              <p>Magnitude: Lowest First</p>
            </option>
            <option  value="descending magnitude">
              <p>Magnitude: Highest First</p>
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
        </dialog>
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
