import React, { useEffect } from "react";
import { connect } from "react-redux";
import { quakeFetch, updateSearchParams } from "../../actions";
import { useForm } from "../../customHooks/useForm";
import SearchBar from "./SearchBar";

function Filters({
  quakeFetch,
  updateSearchParams,
  radius,
  starttime,
  endtime,
  minmagnitude,
  maxmagnitude,
  latitude,
  longitude,
}) {
  // const today = new Date();
  // const tomorrow = new Date(today);
  // tomorrow.setDate(tomorrow.getDate() + 1);

  // function getDates(theDate) {
  //   var month = "" + (theDate.getMonth() + 1),
  //     day = "" + theDate.getDate(),
  //     year = theDate.getFullYear();

  //   if (month.length < 2) month = "0" + month;
  //   if (day.length < 2) day = "0" + day;

  //   const fullDate = [year, month, day].join("-");

  //   return fullDate;
  // }

  console.log('In Filters.js, Here Is State',
  radius,
  starttime,
  endtime,
  minmagnitude,
  maxmagnitude,
  latitude,
  longitude);

  useEffect(() => {
    const initialQuery = `&starttime=${starttime}&endtime=${endtime}&minmagnitude=3.5&maxmagnitude=9`;
    quakeFetch(initialQuery);
  }, []);

  const formSubmitCallback = () => {
    const newQuery = `&starttime=${starttime}&endtime=${endtime}&minmagnitude=${minmagnitude}&maxmagnitude=${maxmagnitude}`;

    quakeFetch(newQuery);
  };

  // const [values, handleChanges, handleSubmit] = useForm(
  //   {
  //     starttime: getDates(today),
  //     endtime: getDates(tomorrow),
  //     minmagnitude: 3.5,
  //     maxmagnitude: 10,
  //     radius: 500,
  //     latitude: 0,
  //     longitude: 0,
  //   },
  //   formSubmitCallback
  // );

  const handleChanges = (e) => {
    e.preventDefault();
    const theParams = {
      name: e.target.name,
      value: e.target.value,
    };
    updateSearchParams(theParams);
  };

  return (
    <div className="search-menu">
      <form onSubmit={formSubmitCallback}>
        <SearchBar />

        <label>Search Radius &#40;km&#41;</label>

        <input
          type="number"
          name="radius"
          onChange={handleChanges}
          value={radius}
          min="1"
          max="20001.6"
          step="0.1"
        />

        <label>Date Range</label>

        <input
          type="date"
          name="starttime"
          onChange={handleChanges}
          value={starttime}
        />

        <input
          type="date"
          name="endtime"
          onChange={handleChanges}
          value={endtime}
        />

        <label>Magnitude</label>

        <input
          type="number"
          name="minmagnitude"
          min="0"
          max="10"
          step="0.1"
          onChange={handleChanges}
          value={minmagnitude}
        />

        <input
          type="number"
          name="maxmagnitude"
          min="0"
          max="10"
          step="0.1"
          onChange={handleChanges}
          value={maxmagnitude}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    starttime: state.searchReducer.starttime,
    endtime: state.searchReducer.endtime,
    minmagnitude: state.searchReducer.minmagnitude,
    maxmagnitude: state.searchReducer.maxmagnitude,
    radius: state.searchReducer.radius,
    latitude: state.searchReducer.latitude,
    longitude: state.searchReducer.longitude,
  };
};

export default connect(mapStateToProps, {
  quakeFetch,
  updateSearchParams
})(Filters);
