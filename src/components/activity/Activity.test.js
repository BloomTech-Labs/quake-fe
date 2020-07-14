// Research testing with thunk mocks...
// Snapshot testing fails due to problems with thunk and the update viewport dispatch function

import React from "react";
import * as rtl from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer as reducers } from "../../reducers/index";

import Activity from "./Activity";

describe("Activity.js Tests", () => {
  const store = createStore(reducers, applyMiddleware(thunk));

  it("should render...", () => {
    rtl.render(
      <Provider store={store}>
        <Activity />
      </Provider>
    );
  });
});
