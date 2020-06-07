import { UPDATE_SEARCH_PARAMS } from "../actions/index";

// We could add the geolocation function here and set coords to
// initial state as an 'or' to the hard coded coords

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

function getDates(theDate) {
  var month = "" + (theDate.getMonth() + 1),
    day = "" + theDate.getDate(),
    year = theDate.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  const fullDate = [year, month, day].join("-");

  return fullDate;
}

export const initialSearchState = {
  starttime: getDates(today),
  endtime: getDates(tomorrow),
  minmagnitude: 3.5,
  maxmagnitude: 10,
  maxradiuskm: 5000,
  latitude: 37.78197,
  longitude: -121.93992,
  placename: "",
};

export const searchReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_PARAMS:
      // Updates state values dynamically based on the name passed in by the payload.
      // See src/components/activity/Filters.js handleChanges() for example.
      return {
        ...state,
        [action.params.name]: action.params.value,
      };
    default:
      return state;
  }
};
