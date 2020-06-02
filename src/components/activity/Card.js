import React, {useState} from "react";
var moment = require('moment');

function Card({ quake, number }) {
  const [open, setOpen] = useState(false);
  console.log(quake);

  const epoch = new Date(quake.properties.time);
  var localTime = moment(quake.properties.time).format('MM-DD-YYYY / hh:mm:ss A')

  function getDates(theDate) {
    var month = "" + (theDate.getMonth() + 1),
      day = "" + theDate.getDate(),
      year = theDate.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    const fullDate = [month, day, year].join("-");

    return fullDate;
  }

  const magRound = Math.round(quake.properties.mag * 10) / 10
  return (
    <div>
      <div className="activity-card" onClick={() => setOpen(open => !open)}>
        <div className="magnitude">{Math.round(quake.properties.mag * 10) / 10}</div>
        <div className="card-info">
          <div className="place">{quake.properties.place}</div>
        </div>
        <div className={!open ? "dropdown-arrow" :"dropdown-arrow-clicked"} onClick={()=> setOpen(open=>!open)}></div>
      </div>
      <div className={!open ? "activity-details-closed" : "activity-details-open"}>
        <div className="detail-item">Date &amp; Time: {localTime}</div>
        <div className="detail-item">Location: {quake.geometry.coordinates[0]},{quake.geometry.coordinates[1]}</div>
        <div className="detail-item">Depth: {quake.geometry.coordinates[2]} km.</div>
        <div className="detail-item">Magnitude: {quake.properties.mag}</div>
      </div>
    </div>
  );
}

export default Card;