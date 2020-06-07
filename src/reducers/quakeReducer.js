import {
  QUAKE_FETCH,
  QUAKE_FETCH_ERROR,
  DISPLAY_QUAKES,
} from "../actions/index.js";

export const initialQuakeState = {
  quakes: [],
  quakeFetch: false,
  quakeFetchError: false,
};

export const quakeReducer = (state = initialQuakeState, action) => {
  switch (action.type) {
    case QUAKE_FETCH:
      return {
        ...state,
        quakes: [],
        quakeFetch: true,
        quakeFetchError: false,
      };
    case QUAKE_FETCH_ERROR:
      return {
        ...state,
        quakes: [],
        quakeFetch: false,
        quakeFetchError: true,
      };
    case DISPLAY_QUAKES:
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
