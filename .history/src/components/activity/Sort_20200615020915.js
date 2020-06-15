import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { quakeSort } from "../../actions/index.js";

function Sort({ quakeSort, quakes, sortBy }) {
  const [sortClicked, setSortClicked] = useState(false);

  const sortRef = useRef(null);

  function onClickRef(e) {
    const isOutside = sortRef.current.contains(e.target);
    console.log(isOutside);
    if (isOutside === true) {
      setSortClicked((sortClicked) => !sortClicked);
      console.log(isOutside);
    } else {
      setSortClicked((sortClicked) => !sortClicked);
    }
  }

  const handleChanges = (e) => {
    e.preventDefault();
    sortBy = e.target.value;
    console.log(sortBy);
    quakeSort(sortBy, quakes);
    setSortClicked(false);
  };

  useEffect(() => {
    console.log("IN SORT.JS LOGGING SORT STATE", sortBy);
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

      <div ref={sortRef} className={!sortClicked ? "sort-input-closed" : "sort-input-open"}>
        <dialog onClick={onClickRef} className="sort-input">
          <h1 tabIndex="0" className="sort-text">
            Sort by:
          </h1>
          <select
            id="sort-input"
            className="sort-dropdown"
            onChange={handleChanges}
            tabIndex="0"
            
          >
            <option value="newest">
              Time: Newest First
            </option>
            <option value="oldest">
              Time: Oldest First
            </option>
            <option value="ascending magnitude">
              Magnitude: Lowest First
            </option>
            <option  value="descending magnitude">
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
