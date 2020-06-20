import React, { useState } from "react";
import Arrow from "../../images/Arrow_Active.png";
var moment = require("moment");

function Card({ quake, number }) {
  const [open, setOpen] = useState(false);

  // Converting epoch time to a more familiar MM-DD-YYYY / hh:mm format.
  var localTime = moment(quake.properties.time).format(
    "MM-DD-YYYY / hh:mm:ss A"
  );

  // Splitting the quake title into 'distance from', 'city', 'state/nation'
  const split1 = quake.properties.place.split(", ");
  const split2 = split1[0].split(" of ");
  split2.push(split1[1]);
  split2.push(split2.shift());

  const roundedMag = Math.round(quake.properties.mag * 10) / 10;

  return (
    <main id="activity-main" aria-label="earthquake information container">

      {/* ----- Begin Initial Info Card ----- */}

      <article
        tabIndex="0"
        className="activity-card"
        onClick={() => setOpen((open) => !open)}
      >
        <section
          tabIndex="0"
          aria-label={`earthquake magnitude ${
            Math.round(quake.properties.mag * 10) / 10
          }`}
          className="magnitude-info"
        >
          <aside
            className={
              roundedMag < 1.5
                ? "magnitude-1"
                : roundedMag < 3
                ? "magnitude-3"
                : roundedMag < 4.5
                ? "magnitude-4"
                : roundedMag < 6
                ? "magnitude-6"
                : roundedMag < 7.5
                ? "magnitude-7"
                : "magnitude-9"
            }
          ></aside>

          <aside
            tabIndex="0"
            aria-label={`magnitude = ${roundedMag.toFixed(1)}`}
            className="magnitude-number"
          >
            {roundedMag.toFixed(1)}
          </aside>
        </section>

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

        <img
          src={Arrow}
          tabIndex="0"
          className={!open ? "dropdown-arrow" : "dropdown-arrow-clicked"}
          alt="dropdown arrow"
        />
      </article>

      {/* ----- End Initial Info Card ----- */}

      {/* ----- Begin Details Dropdown Card ----- */}

      <article
        className={!open ? "activity-details-closed" : "activity-details-open"}
      >
        <section tabIndex="0" className="detail-item">
          <strong>Date &amp; Time:</strong> <time>{localTime}</time>
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

      {/* ----- End Details Dropdown Card ----- */}
    </main>
  );
}

export default Card;
