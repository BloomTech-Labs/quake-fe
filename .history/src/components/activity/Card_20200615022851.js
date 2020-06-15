import React, { useState } from "react";
var moment = require("moment");

function Card({ quake, number }) {
  const [open, setOpen] = useState(false);

  // Converting epoch time to a more familiar MM-DD-YYYY / hh:mm format.
  var localTime = moment(quake.properties.time).format(
    "MM-DD-YYYY / ",  
    
  );

  // Splitting the quake title into 'distance from', 'city', 'state/nation'
  const split1 = quake.properties.place.split(", ");
  const split2 = split1[0].split(" of ");
  split2.push(split1[1]);
  split2.push(split2.shift());

  return (
    <main id="activity-main" aria-label="earthquake information container">
      <article
        tabIndex="0"
        className="activity-card"
        onClick={() => setOpen((open) => !open)}
      >
        <aside
          tabIndex="0"
          aria-label={`earthquake magnitude ${
            Math.round(quake.properties.mag * 10) / 10
          }`}
          className="magnitude"
        >
          {Math.round(quake.properties.mag * 10) / 10}
        </aside>
        <article
          tabIndex="0"
          aria-label="location information"
          className="place-info"
        >
          <h2 tabIndex="0" className="city">
            {split2[0]}
          </h2>
          <h2 tabIndex="0" className="country">
            {split2[1]}
          </h2>
          <h3 tabIndex="0" className="distance">
            {split2[2]}
          </h3>
        </article>
        <div
          tabIndex="0"
          className={!open ? "dropdown-arrow" : "dropdown-arrow-clicked"}
          onClick={() => setOpen((open) => !open)}
          onFocus={() => setOpen((open) => !open)}
        ></div>
      </article>
      <article
        className={!open ? "activity-details-closed" : "activity-details-open"}
      >
        <section tabIndex="0" className="detail-item">
          <strong>Date &amp; Time: </strong><time>{localTime}</time>
        </section>
        <section tabIndex="0" className="detail-item">
          <strong>Location:</strong> {quake.geometry.coordinates[0]},{" "}
          {quake.geometry.coordinates[1]}
        </section>
        <section tabIndex="0" className="detail-item">
          <strong>Depth:</strong> {quake.geometry.coordinates[2]} km.
        </section>
        <section tabIndex="0" className="detail-item">
          <strong>Magnitude:</strong> {quake.properties.mag}
        </section>
      </article>
    </main>
  );
}

export default Card;
