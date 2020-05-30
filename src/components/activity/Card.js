import React from "react";
import styled from "styled-components";

const ListCard = styled.div`
  border: 1px solid blue;
  border-radius: 5px;
`;

function Card({ quake, number }) {
  return (
    <ListCard>
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
    </ListCard>
  );
}

export default Card;
