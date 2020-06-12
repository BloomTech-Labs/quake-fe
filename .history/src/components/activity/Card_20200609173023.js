import React, {useState} from "react";
var moment = require('moment');

function Card({ quake, number }) {
  const [open, setOpen] = useState(false);

  // Converting epoch time to a more familiar MM-DD-YYYY / hh:mm format.
  var localTime = moment(quake.properties.time).format('MM-DD-YYYY / hh:mm:ss A');
  
  // Splitting the quake title into 'distance from', 'city', 'state/nation'
  const split1 = quake.properties.place.split(', ');
  const split2 = split1[0].split(' of ');
  split2.push(split1[1]);
  split2.push(split2.shift());

  return (
    <main>
      <article className="activity-card" onClick={() => setOpen((open) => !open)}>
        <div className="magnitude">
          {Math.round(quake.properties.mag * 10) / 10}
        </div>
        <div className="card-info">
          <div className="place-info">
            <h2 className="city">{split2[0]}</h2>
            <h2 className="country">{split2[1]}</h2>
            <h3 className="distance">{split2[2]}</h3>
          </div>
        </div>
        {/* <div
          className={!open ? "dropdown-arrow" : "dropdown-arrow-clicked"}
          onClick={() => setOpen((open) => !open)}
        ></div> */}
        <details
        // className={!open ? "activity-details-closed" : "activity-details-open"}
      >
        <section className="detail-item">
          <strong>Date &amp; Time:</strong> <time>{localTime}</time>
        </section>
        <section className="detail-item">
          <strong>Location:</strong> {quake.geometry.coordinates[0]}, {quake.geometry.coordinates[1]}
        </section>
        <section className="detail-item">
          <strong>Depth:</strong> {quake.geometry.coordinates[2]} km.
        </section>
        <section className="detail-item"><strong>Magnitude:</strong> {quake.properties.mag}</section>
      </details>
      </article>
      
    </main>
  );
}

export default Card;