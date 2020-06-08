import {
  QUAKE_FETCH,
  QUAKE_FETCH_ERROR,
  DISPLAY_QUAKES,
  SORT_QUAKES
} from "../actions/index.js";

export const initialQuakeState = {
  quakes: [],
  quakeFetch: false,
  quakeFetchError: false,
};

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

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
      console.log("inside redux", action.payload)
      return state;
      
    default:
      return state;
  }
};
