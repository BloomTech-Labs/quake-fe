import axios from "axios";

export const QUAKE_FETCH = "QUAKE_FETCH";
export const QUAKE_FETCH_ERROR = "QUAKE_FETCH_ERROR";
export const DISPLAY_QUAKES = "DISPLAY_QUAKES ";

export const UPDATE_SEARCH_PARAMS = "UPDATE_SEARCH_PARAMS";

export const quakeFetch = (theQuery) => (dispatch) => {
  dispatch({ type: QUAKE_FETCH });
  setTimeout(() => {
    axios
      .get(
        `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=20000${theQuery}`
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
  console.log('Ran updateSearchParams: ', theParams);
  dispatch({ type: UPDATE_SEARCH_PARAMS, params: theParams });
};

