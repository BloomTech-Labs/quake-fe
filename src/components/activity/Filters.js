import React, { useEffect } from "react";
import { connect } from "react-redux";
import { quakeFetch } from "../../actions";
import { useForm } from "../../customHooks/useForm";

function Filters(props) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  function getDates(theDate) {
    var month = "" + (theDate.getMonth() + 1),
      day = "" + theDate.getDate(),
      year = theDate.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    const fullDate = [year, month, day].join("-");

    return fullDate;
  }

  useEffect(() => {
    const initialQuery = `&starttime=${getDates(today)}&endtime=${getDates(
      tomorrow
    )}&minmagnitude=3&maxmagnitude=9&orderby=time`;
    console.log(initialQuery);
    props.quakeFetch(initialQuery);
  }, []);

  const formSubmitCallback = () => {
    console.log(values);

    const newQuery = `&starttime=${values.starttime}&endtime=${values.endtime}&minmagnitude=${values.minmagnitude}&maxmagnitude=${values.maxmagnitude}&orderby=${values.orderby}`;

    console.log(newQuery);
    props.quakeFetch(newQuery);
  };

  const [values, handleChanges, handleSubmit] = useForm(
    {
      starttime: getDates(today),
      endtime: getDates(tomorrow),
      minmagnitude: 0,
      maxmagnitude: 10,
      orderby: "time",
      latitude: 0,
      longitude: 0
    },
    formSubmitCallback
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Date Range</label>

        <input
          type="date"
          name="starttime"
          onChange={handleChanges}
          value={values.starttime}
        />

        <input
          type="date"
          name="endtime"
          onChange={handleChanges}
          value={values.endtime}
        />

        <label>Magnitude</label>

        <input
          type="number"
          name="minmagnitude"
          min="0"
          max="10"
          onChange={handleChanges}
          value={values.minmagnitude}
        />

        <input
          type="number"
          name="maxmagnitude"
          min="0"
          max="10"
          onChange={handleChanges}
          value={values.maxmagnitude}
        />

        <select name="orderby" onChange={handleChanges}>
          <option value="time">Time Dec.</option>
          <option value="time-asc">Time Asc.</option>
          <option value="magnitude">Magnitude Dec.</option>
          <option value="magnitude-asc">Magnitude Asc.</option>
        </select>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  quakeFetch,
})(Filters);
