import React from "react";

function Card({ quake, number }) {
  return (
    <div>
      <h1>
        {number} - {quake.properties.title}
      </h1>
      <h2>
        Location: {quake.geometry.coordinates[0]} /{" "}
        {quake.geometry.coordinates[1]}
      </h2>
      <p>Magnitude: {quake.properties.mag}</p>
      <p>Depth: {quake.geometry.coordinates[2]} km.</p>
      <p>Status: {quake.properties.status}</p>
    </div>
  );
}

export default Card;
