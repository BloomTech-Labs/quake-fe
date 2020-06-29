import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setViewport } from "../../../actions";
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
        height={height} // Its the viewport info silly
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
                stroke="#00000044"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4853 20.4852L12 28.9706L3.51467 20.4852C1.83646 18.807 0.693582 16.6688 0.230571 14.341C-0.232439 12.0133 0.00520913 9.60046 0.913465 7.40776C1.82172 5.21506 3.35979 3.34092 5.33318 2.02235C7.30656 0.703784 9.62663 0 12 0C14.3734 0 16.6934 0.703784 18.6668 2.02235C20.6402 3.34092 22.1783 5.21506 23.0865 7.40776C23.9948 9.60046 24.2324 12.0133 23.7694 14.341C23.3064 16.6688 22.1635 18.807 20.4853 20.4852ZM12 17.3332C13.4145 17.3332 14.771 16.7713 15.7712 15.7711C16.7714 14.7709 17.3333 13.4144 17.3333 11.9999C17.3333 10.5854 16.7714 9.22885 15.7712 8.22866C14.771 7.22846 13.4145 6.66656 12 6.66656C10.5855 6.66656 9.22896 7.22846 8.22877 8.22866C7.22857 9.22885 6.66667 10.5854 6.66667 11.9999C6.66667 13.4144 7.22857 14.7709 8.22877 15.7711C9.22896 16.7713 10.5855 17.3332 12 17.3332ZM12 14.6666C11.2928 14.6666 10.6145 14.3856 10.1144 13.8855C9.61429 13.3854 9.33333 12.7071 9.33333 11.9999C9.33333 11.2926 9.61429 10.6144 10.1144 10.1143C10.6145 9.61418 11.2928 9.33323 12 9.33323C12.7072 9.33323 13.3855 9.61418 13.8856 10.1143C14.3857 10.6144 14.6667 11.2926 14.6667 11.9999C14.6667 12.7071 14.3857 13.3854 13.8856 13.8855C13.3855 14.3856 12.7072 14.6666 12 14.6666Z"
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
