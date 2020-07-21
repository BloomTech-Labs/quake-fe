import React, { useState } from "react";
import { connect } from "react-redux";
import { jumpViewport } from "../../../redux/actions";
import Arrow from "../../../images/icons/Arrow_Active.png";
var moment = require("moment");

function Card({ jumpViewport, quake, number }) {
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

  const locationJump = (e) => {
    // Triggers map to move to quake marker
    e.preventDefault();
    jumpViewport(quake.geometry.coordinates[0], quake.geometry.coordinates[1]);
  };

  return (
    <main
      data-testid="mapped-quake"
      className={
        !open
          ? "activity-card-container activity-card-container-closed"
          : "activity-card-container activity-card-container-open"
      }
      id="activity-main"
      aria-label="earthquake information container"
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

      {/* ----- Begin Initial Info Card ----- */}
      <div className="activity-info-container">
        <article
          className="activity-info-primary"
          onClick={() => setOpen((open) => !open)}
        >
          <section
            aria-label={`earthquake magnitude ${
              Math.round(quake.properties.mag * 10) / 10
            }`}
            className="magnitude-info"
          >
            <aside aria-label={`magnitude = ${roundedMag.toFixed(1)}`}>
              {roundedMag.toFixed(1)}
            </aside>
          </section>

          <article aria-label="location information" className="place-info">
            <h2 className="city">{split2[0]}</h2>

            <h2 className="country">{split2[1]}</h2>

            <h3 className="distance">{split2[2]}</h3>
          </article>

          <img
            src={Arrow}
            className={
              !open ? "dropdown-arrow-not-clicked" : "dropdown-arrow-clicked"
            }
            alt="dropdown arrow"
          />
        </article>

        {/* ----- End Initial Info Card ----- */}

        {/* ----- Begin Details Dropdown Card ----- */}

        <article className="activity-info-secondary">
          <section className="detail-item">
            <strong>Date &amp; Time:</strong> <time>{localTime}</time>
          </section>

          <section className="detail-item">
            <strong>Location:</strong> {quake.geometry.coordinates[0]}&deg;
            {" / "}
            {quake.geometry.coordinates[1]}&deg;
          </section>

          <section className="detail-item">
            <strong>Depth:</strong> {quake.geometry.coordinates[2]} km.
          </section>

          <section className="detail-item">
            <strong>Magnitude:</strong> {quake.properties.mag}
          </section>

          <button onClick={locationJump}>Jump to Location</button>
        </article>

        {/* ----- End Details Dropdown Card ----- */}
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  jumpViewport,
})(Card);
