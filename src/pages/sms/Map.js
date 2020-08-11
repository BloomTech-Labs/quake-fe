import React from "react";
import { connect } from "react-redux";
import ReactMapGL, { Marker } from "react-map-gl"; // https://github.com/visgl/react-map-gl/tree/master/docs

function MapContainer({
  latitude,
  longitude,
  queryLatitude,
  queryLongitude,
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
        }}
      >
        <Marker latitude={queryLatitude} longitude={queryLongitude}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            width="24"
            height="29"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z"
              fill="#308257"
            />
          </svg>
        </Marker>
            <Marker
              key='mainMarker'
              latitude={latitude}
              longitude={longitude}
            >
              <svg
                className="map-marker"
                width="15"
                height="12"
                viewBox="0 0 24 29"
                fill="none"
                stroke="#00000022"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="7"
                  fill="#53e0cd"
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
      </ReactMapGL>
    </div>
  );
}

const mapPropsToState = (state) => {
  return {
    quakes: state.quakeReducer.quakes,
    latitude: state.mapReducer.latitude,
    longitude: state.mapReducer.longitude,
    queryLatitude: state.searchReducer.latitude,
    queryLongitude: state.searchReducer.longitude,
    transition: state.mapReducer.transition,
    zoom: state.mapReducer.zoom,
    width: state.mapReducer.width,
    height: state.mapReducer.height,
  };
};

export default connect(mapPropsToState, {
})(MapContainer);
