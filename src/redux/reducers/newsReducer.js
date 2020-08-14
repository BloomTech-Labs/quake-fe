import {
  NEWS_FETCH,
  NEWS_FETCH_ERROR,
  DISPLAY_NEWS,
} from "../actions/index.js";

export const initialNewsState = {
  news: [],
  newsFetch: false,
  newsFetchError: false,
  sortBy: "newest",
};

export const newsReducer = (state = initialNewsState, action) => {
  switch (action.type) {
    case NEWS_FETCH:
      // Runs first before the axios call to USGS begins
      // Clears any quakes in the quakes array, sets the fetch status to true.
      // If previous requests errored out, this sets error status to false
      return {
        ...state,
        news: [],
        newsFetch: true,
        newsFetchError: false,
      };
    case NEWS_FETCH_ERROR:
      // Runs after QUAKE_FETCH if axios catches an error.
      // Clears any quakes in the quakes array, sets error status to true.
      return {
        ...state,
        news: [],
        newsFetch: false,
        newsFetchError: true,
      };
    case DISPLAY_NEWS:
      // Runs after QUAKE_FETCH if axios gets a data response and doesn't catch an error.
      // Sets the axios results to quakes array.
      // Sets the fetch status and error status to false.
      return {
        ...state,
        news: action.newsData,
        newsFetch: false,
        newsFetchError: false,
      };

    default:
      return state;
  }
};
