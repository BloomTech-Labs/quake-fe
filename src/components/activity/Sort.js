import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { quakeSort } from "../../actions/index.js";

function Sort({ quakeSort, quakes, sortBy }) {

    const handleChanges = (e)=>{
        e.preventDefault();
        sortBy=e.target.value;
        console.log(sortBy);
        quakeSort(sortBy, quakes);
    }

    useEffect(() => {
      console.log('IN SORT.JS LOGGIN SORT STATE', sortBy);
    },[sortBy]);

    return (
        <div>
            <label for="sort">Sort by:</label>
            <form>
                <select name="sort" onChange={handleChanges}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="ascending magnitude">Ascending Magnitude</option>
                    <option value="descending magnitude">Descending Magnitude</option>
                </select>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      sortBy: state.quakeReducer.sortBy,
      quakes: state.quakeReducer.quakes
    };
  };
  
  export default connect(mapStateToProps, {
    quakeSort,
  })(Sort);