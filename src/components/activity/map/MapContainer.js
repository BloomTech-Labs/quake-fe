import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ReactMapGL, { Marker } from "react-map-gl"; // https://github.com/visgl/react-map-gl/tree/master/docs
import axios from "axios";

function MapContainer({ quakes }) {
  const [viewport, setViewport] = useState({
    latitude: 37.090240,
    longitude: -95.712891,
    zoom: 4,
    width: "100%",
    height: "100%",
  });
  // className={`marker${expandMarker ? " expand-marker" : ""}`} onClick={expandMarker}
  // expandMarker = () => {

  // }

  return (
    <div className="map-container">
      <ReactMapGL
        {...viewport}                                                   // Its the viewport info silly

        mapboxApiAccessToken={process.env.REACT_APP_MAP_API_TOKEN}      // API access token from mapbox account

        mapStyle={process.env.REACT_APP_MAP_STYLE_TOKEN}                // style from mapbox studio

        onViewportChange={(viewport) => {                               // When a user interacts with the viewport of the map window, 
          setViewport(viewport);                                        // it will adjust the values stored in state refreshing the map
        }}
      >
        {quakes.map((quake, index) => {
          return (
            <Marker                                                     // Make this a marker that expands to a context menu 
              key={index}
              latitude={quake.geometry.coordinates[1]}
              longitude={quake.geometry.coordinates[0]}
            >
              <div className="quake-marker">
                <p>{Math.round(quake.properties.mag * 10) / 10}</p>
              </div>
            </Marker>
          );
        })}
      </ReactMapGL>
    </div>
  );
}

const mapPropsToState = (state) => {
  return {
    quakes: state.quakeReducer.quakes,
  };
};

export default connect(mapPropsToState, {})(MapContainer);
