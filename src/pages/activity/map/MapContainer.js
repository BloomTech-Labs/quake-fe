import React from "react";
import { connect } from "react-redux";
import { setViewport } from "../../../redux/actions";
import ReactMapGL, { Marker } from "react-map-gl"; // https://github.com/visgl/react-map-gl/tree/master/docs

function MapContainer({
  setViewport,
  quakes,
  latitude,
  longitude,
  transition,
  zoom,
  width,
  height,
}) {
  return (
    <div className="map-container" id="map-container">
      <ReactMapGL
        latitude={latitude}
        longitude={longitude}
        zoom={zoom}
        width={width}
        height={height}
        transitionDuration={transition}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_API_TOKEN} // API access token from mapbox account
        mapStyle={process.env.REACT_APP_MAP_STYLE_TOKEN} // style from mapbox studio
        onViewportChange={(viewport) => {
          // When a user interacts with the viewport of the map window,
          setViewport(viewport); // it will adjust the values stored in state refreshing the map
        }}
      >
        {quakes.map((quake, index) => {
          let roundedMag = Math.round(quake.properties.mag * 10) / 10;
          return (
            <Marker // Make this a marker that expands to a context menu
              key={index}
              latitude={quake.geometry.coordinates[1]}
              longitude={quake.geometry.coordinates[0]}
            >
              <svg
                className="map-marker"
                width="24"
                height="29"
                viewBox="0 0 24 29"
                fill="none"
                stroke="#00000022"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="7"
                  fill={
                    roundedMag < 1.5
                      ? "#53e0cd"
                      : roundedMag < 3
                      ? "#a5bf65"
                      : roundedMag < 4.5
                      ? "#e4912f"
                      : roundedMag < 6
                      ? "#f46428"
                      : roundedMag < 7.5
                      ? "#f13342"
                      : "#ef2073"
                  }
                />
                <circle
                  cx="7"
                  cy="7"
                  r="6.5"
                  stroke="black"
                  strokeOpacity="0.3"
                />
              </svg>
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
    latitude: state.mapReducer.latitude,
    longitude: state.mapReducer.longitude,
    transition: state.mapReducer.transition,
    zoom: state.mapReducer.zoom,
    width: state.mapReducer.width,
    height: state.mapReducer.height,
  };
};

export default connect(mapPropsToState, {
  setViewport,
})(MapContainer);
