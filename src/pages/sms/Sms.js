import React, { useState, useCallback, useEffect } from "react";
import GeoCoder from "../activity/search/Geocoder";
import { connect } from "react-redux";
import { updateSearchParams } from "../../redux/actions";
import Map from "./Map";

const axios = require("axios");

const Sms = (state) => {
  const longLatString = state.longitude + ", " + state.latitude;

  const [smsInfo, setSmsInfo] = useState({
    coordinates: "",
  });
  console.log(smsInfo);

  const twilioPost = (e) => {
    e.preventDefault();
    console.log(
      `Sms > submit ${smsInfo.cell} ${smsInfo.coordinates} ${smsInfo.distance}`
    );

    axios
      .post(
        "https://quakelabs-be-production.herokuapp.com/api/sms/create-notify",
        smsInfo
      )
      .then(function (res) {
        alert(res);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  const changeHandler = (ev) => {
    console.log("value", ev.target.value);
    let value = ev.target.value;

    setSmsInfo({
      ...smsInfo,
      [ev.target.name]: value,
    });

    console.log("object", smsInfo);
  };

  const [rangeval, setRangeval] = useState(50);
  const [rangevalMiles, setRangevalMiles] = useState(31.1);

  useEffect(() => {}, [rangeval]);

  const handleChangeSlider = (e) => {
    console.log("value", e.target.value);
    let value = e.target.value;
    setRangeval(e.target.value);
    setRangevalMiles((e.target.value / 1.609344).toFixed(1));

    setSmsInfo({
      ...smsInfo,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    setSmsInfo({
      ...smsInfo,
      coordinates: longLatString,
    });
  }, [longLatString]);

  return (
    <section id="sms-main" className="main-container no-scroll">
      <div className="container">
        <h2 className="title">Get earthquake SMS updates.</h2>
        <h1 className="subTitle">No subscription required.</h1>
        <form id="myForm" onSubmit={twilioPost}>
          <div className="Phone col">
            <label className="label">Phone Number</label>
            <input
              type="text"
              className="text"
              name="cell"
              placeholder="+1 "
              onChange={changeHandler}
              value={smsInfo.name}
              required
            />
          </div>
          <div className="Coords col">
            <label className="label">Address or ZIP Code</label>
            {/* show on map? with radius indicator */}
            <GeoCoder hideSearch="1" />
          </div>
          <div className="Distance col">
            <label className="label">
              Slide to choose a notification radius
            </label>

            <div className="slide-container">
              <input
                name="distance"
                className="slider"
                type="range"
                min="1"
                max="100"
                value={rangeval}
                onChange={handleChangeSlider}
              />
            </div>

            <br />
            <h4 id="distance-label">
              {rangeval} Kilometers / {rangevalMiles} Miles
            </h4>
          </div>
          <Map />
          <div className="btn-container">
            <button className="btn" type="submit">
              Send Verification to my Phone
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

//US numbers only? Check Twilio

const mapStateToProps = (state) => {
  return {
    latitude: state.searchReducer.latitude,
    longitude: state.searchReducer.longitude,
  };
};

export default connect(mapStateToProps, {
  updateSearchParams,
})(Sms);
