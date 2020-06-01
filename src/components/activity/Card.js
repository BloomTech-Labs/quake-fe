import React, {useState} from "react";

function Card({ quake, number }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="activity-card" onClick={() => setOpen(open => !open)}>
        <div className="magnitude">{Number.parseFloat(quake.properties.mag).toPrecision(2)}</div>
        <div className="card-info">
          <div className="place">{quake.properties.place}</div>
        </div>
        <div className={!open ? "dropdown-arrow" :"dropdown-arrow-clicked"} onClick={()=> setOpen(open=>!open)}></div>
      </div>
      <div className={!open ? "activity-details-closed" : "activity-details-open"}>
        <div className="detail-item">Magnitude: {quake.properties.mag}</div>
        <div className="detail-item">Depth: {quake.geometry.coordinates[2]} km.</div>
        <div className="detail-item">Status: {quake.properties.status}</div>
        <div className="detail-item">Depth: {quake.geometry.coordinates[2]} km.</div>
        <div className="detail-item">Status: {quake.properties.status}</div>
      </div>
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