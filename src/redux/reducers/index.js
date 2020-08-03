// Redux
import { combineReducers } from "redux";

// Reducers
import { quakeReducer } from "./quakeReducer";
import { searchReducer } from "./searchReducer";
import { mapReducer } from "./mapReducer";
import { newsReducer } from "./newsReducer";

// ***** NOTE *****
// When using connect and mapStateToProps, make sure
// you link with this syntax:

// 'prop_name': state.'reducer_name'.'state_value'

// Because we have multiple reducers, you MUST specify
// which state object you are trying to get values from

export const rootReducer = combineReducers({
  quakeReducer,
  searchReducer,
  mapReducer,
  newsReducer,
});
