/* eslint-disable no-eval */
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

// newsReducer Actions
export const NEWS_FETCH = "NEWS_FETCH";
export const NEWS_FETCH_ERROR = "NEWS_FETCH_ERROR";
export const DISPLAY_NEWS = "DISPLAY_NEWS";

let sortedQuakes,
  sortInfo = [
    { by: "ascending magnitude", sort: "a.properties.mag - b.properties.mag" },
    { by: "descending magnitude", sort: "b.properties.mag - a.properties.mag" },
    { by: "newest", sort: "b.properties.time - a.properties.time" },
    { by: "oldest", sort: "a.properties.time - b.properties.time" },
    {
      by: "closest depth",
      sort: "a.geometry.coordinates[2] - b.geometry.coordinates[2]",
    },
    {
      by: "furthest depth",
      sort: "b.geometry.coordinates[2] - a.geometry.coordinates[2]",
    },
    { by: "closest distance", sort: "a.distance - b.distance" },
    { by: "furthest distance", sort: "b.distance - a.distance" },
  ];

export const firstLoad = (theQuery, fallbackQuery, fallbackFn) => (
  dispatch
) => {
  dispatch({ type: QUAKE_FETCH });
  setTimeout(() => {
    axios
      .get(theQuery)
      .then((res) => {
        console.log("res", res.data.feature);
        dispatch({ type: DISPLAY_QUAKES, quakeData: res.data.features });
      })
      .catch((error) => {
        fallbackFn(fallbackQuery);
      });
  }, 500);
};

export const quakeFetch = (theQuery) => (dispatch) => {
  console.log("in QuakeFetch", theQuery);
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

  for (let i = 0; i < sortInfo.length; i++) {
    if (sortBy === sortInfo[i].by) {
      if (
        sortInfo[i].by === "closest distance" ||
        sortInfo[i].by === "furthest distance"
      ) {
        // add distance from quake to user's location into list of quakes
        let quakeDistances = quakes.map((a) => {
          // TURF POINT ORDER: longitude, latitude
          var to = turf.point([
            a.geometry.coordinates[0],
            a.geometry.coordinates[1],
          ]);
          return { ...a, distance: turf.distance(from, to).toFixed(2) };
        });
        sortedQuakes = quakeDistances.sort((a, b) => eval(sortInfo[i].sort));
      } else {
        sortedQuakes = quakes.sort((a, b) => eval(sortInfo[i].sort));
      }
    }
  }
  dispatch({ type: SORT_QUAKES, quakeData: [] });
  dispatch({ type: SORT_QUAKES, quakeData: sortedQuakes });
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

// ***NEWSFEED ACTIONS*** //

export const newsLoad = (newsTopics) => (dispatch) => {
  dispatch({ type: NEWS_FETCH });

  setTimeout(() => {
    let allArticles = [];
    newsTopics.forEach((topic) => {
      axios
        .get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&api-key=${process.env.REACT_APP_NYT_API_TOKEN}`
        )
        .then((res) => {
          allArticles = allArticles.concat(res.data.response.docs);
          console.log(allArticles)
          dispatch({ type: DISPLAY_NEWS, newsData: allArticles });
        })
        .catch((err) => {
          console.log("Error Fetching News Data", err);
          dispatch({ type: NEWS_FETCH_ERROR });
        });
    });
    
  }, 500);
};
