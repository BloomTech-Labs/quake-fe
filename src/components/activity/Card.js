import React from "react";

function Card({ quake, number }) {
  console.log(quake.properties);
  return (
    <div className="activity-card">
      <div className="magnitude">{Number.parseFloat(quake.properties.mag).toPrecision(2)}</div>
      <div className="card-info">
        <div className="place">{quake.properties.place}</div>
      </div>
      <div className="dropdown-arrow"></div>
    </div>
  );
}

export default Card;
{/* <h1>
  {number} - {quake.properties.title}
</h1>
  <h2>
    Location: {quake.geometry.coordinates[0]} /{" "}
    {quake.geometry.coordinates[1]}
  </h2>
  <p>Magnitude: {quake.properties.mag}</p>
  <p>Depth: {quake.geometry.coordinates[2]} km.</p>
  <p>Status: {quake.properties.status}</p> */}