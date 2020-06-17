import {
  QUAKE_FETCH,
  QUAKE_FETCH_ERROR,
  DISPLAY_QUAKES,
  SORT_QUAKES,
} from "../actions/index.js";

export const initialQuakeState = {
  quakes: [],
  quakeFetch: false,
  quakeFetchError: false,
  sortBy: "newest",
};

export const quakeReducer = (state = initialQuakeState, action) => {
  switch (action.type) {
    case QUAKE_FETCH:
      // Runs first before the axios call to USGS begins
      // Clears any quakes in the quakes array, sets the fetch status to true.
      // If previous requests errored out, this sets error status to false
      return {
        ...state,
        quakes: [],
        quakeFetch: true,
        quakeFetchError: false,
      };
    case QUAKE_FETCH_ERROR:
      // Runs after QUAKE_FETCH if axios catches an error.
      // Clears any quakes in the quakes array, sets error status to true.
      return {
        ...state,
        quakes: [],
        quakeFetch: false,
        quakeFetchError: true,
      };
    case DISPLAY_QUAKES:
      // Runs after QUAKE_FETCH if axios gets a data response and doesn't catch an error.
      // Sets the axios results to quakes array.
      // Sets the fetch status and error status to false.
      return {
        ...state,
        quakes: action.quakeData,
        quakeFetch: false,
        quakeFetchError: false,
      };
    case SORT_QUAKES:
      return {
        ...state,
        quakes: action.quakeData,
        quakeFetch: false,
        quakeFetchError: false,
      };

    default:
      return state;
  }
};
