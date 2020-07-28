import axios from "axios";
import * as turf from "@turf/turf";
import { initialSearchState } from "../reducers/searchReducer";

// quakeReducer Actions
export const QUAKE_FETCH = "QUAKE_FETCH";
export const QUAKE_FETCH_ERROR = "QUAKE_FETCH_ERROR";
export const DISPLAY_QUAKES = "DISPLAY_QUAKES ";
export const SORT_QUAKES = "SORT_QUAKES";

// searchReducer Actions
export const UPDATE_SEARCH_PARAMS = "UPDATE_SEARCH_PARAMS";

// mapReducer Actions
export const UPDATE_VIEWPORT = "UPDATE_VIEWPORT";
export const JUMP_VIEWPORT = "JUMP_VIEWPORT";

export const firstLoad = (theQuery, fallback, fallbackFn) => (dispatch) => {
  dispatch({ type: QUAKE_FETCH });
  setTimeout(() => {
    axios
      .get(
        theQuery
      )
      .then((res) => {
        console.log('res', res.data.feature);
        dispatch({ type: DISPLAY_QUAKES, quakeData: res.data.features });
      })
      .catch((error) => {
        fallbackFn(fallback);
      });
  }, 500);
 };
 

export const quakeFetch = (theQuery) => (dispatch) => {
  console.log('in QuakeFetch', theQuery);
  dispatch({ type: QUAKE_FETCH });
  setTimeout(() => {
    axios
      .get(
        `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=100${theQuery}`
      )
      .then((res) => {
        dispatch({ type: DISPLAY_QUAKES, quakeData: res.data.features });
      })
      .catch((err) => {
        console.log("Error Fetching Earthquake Data From USGS: ", err);
        dispatch({ type: QUAKE_FETCH_ERROR });
      });
  }, 500);
};

export const updateSearchParams = (theParams) => (dispatch) => {
  dispatch({ type: UPDATE_SEARCH_PARAMS, params: theParams });
};

export const quakeSort = (sortBy, quakes, state = initialSearchState) => (
  dispatch
) => {
  let myLocation = localStorage.getItem("gps")
    ? JSON.parse(localStorage.getItem("gps"))
    : state;
  // TURF POINT ORDER: longitude, latitude
  var from = turf.point([myLocation.longitude, myLocation.latitude]);

  if (sortBy === "ascending magnitude") {
    const sortedQuakes = quakes.sort(
      (a, b) => a.properties.mag - b.properties.mag
    );

    dispatch({ type: SORT_QUAKES, quakeData: [] });
    dispatch({ type: SORT_QUAKES, quakeData: sortedQuakes });
  } else if (sortBy === "descending magnitude") {
    const sortedQuakes = quakes.sort(
      (a, b) => b.properties.mag - a.properties.mag
    );

    dispatch({ type: SORT_QUAKES, quakeData: [] });
    dispatch({ type: SORT_QUAKES, quakeData: sortedQuakes });
  } else if (sortBy === "newest") {
    const sortedQuakes = quakes.sort(
      (a, b) => b.properties.time - a.properties.time
    );

    dispatch({ type: SORT_QUAKES, quakeData: [] });
    dispatch({ type: SORT_QUAKES, quakeData: sortedQuakes });
  } else if (sortBy === "oldest") {
    const sortedQuakes = quakes.sort(
      (a, b) => a.properties.time - b.properties.time
    );

    dispatch({ type: SORT_QUAKES, quakeData: [] });
    dispatch({ type: SORT_QUAKES, quakeData: sortedQuakes });
  } else if (sortBy === "closest depth") {
    const sortedQuakes = quakes.sort(
      (a, b) => a.geometry.coordinates[2] - b.geometry.coordinates[2]
    );

    dispatch({ type: SORT_QUAKES, quakeData: [] });
    dispatch({ type: SORT_QUAKES, quakeData: sortedQuakes });
  } else if (sortBy === "furthest depth") {
    const sortedQuakes = quakes.sort(
      (a, b) => b.geometry.coordinates[2] - a.geometry.coordinates[2]
    );

    dispatch({ type: SORT_QUAKES, quakeData: [] });
    dispatch({ type: SORT_QUAKES, quakeData: sortedQuakes });
  } else if (sortBy === "closest distance") {
    // add distance from quake to user location into list of quakes
    let quakeDistances = quakes.map((a) => {
      // TURF POINT ORDER: longitude, latitude
      var to = turf.point([
        a.geometry.coordinates[0],
        a.geometry.coordinates[1],
      ]);
      return { ...a, distance: turf.distance(from, to).toFixed(2) };
    });
    let sortedQuakes = quakeDistances.sort((a, b) => a.distance - b.distance);

    dispatch({ type: SORT_QUAKES, quakeData: [] });
    dispatch({ type: SORT_QUAKES, quakeData: sortedQuakes });
  } else if (sortBy === "furthest distance") {
    // add distance from quake to user location into list of quakes
    let quakeDistances = quakes.map((a) => {
      // TURF POINT ORDER: longitude, latitude
      var to = turf.point([
        a.geometry.coordinates[0],
        a.geometry.coordinates[1],
      ]);
      return { ...a, distance: turf.distance(from, to).toFixed(2) };
    });
    let sortedQuakes = quakeDistances.sort((a, b) => b.distance - a.distance);

    dispatch({ type: SORT_QUAKES, quakeData: [] });
    dispatch({ type: SORT_QUAKES, quakeData: sortedQuakes });
  }
};

export const setViewport = (viewport) => (dispatch) => {
  let newVP = {
    ...viewport,
    width: "100%",
    height: "100%",
  };

  dispatch({ type: UPDATE_VIEWPORT, viewportInfo: newVP });
};

export const jumpViewport = (long, lat, zoom) => (dispatch) => {
  let newVP = {
    latitude: lat,
    longitude: long,
    width: "100%",
    height: "100%",
    zoom: zoom,
  };

  dispatch({ type: JUMP_VIEWPORT, jumpInfo: newVP });
};
