import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { quakeReducer as reducer } from "../../reducers/index";

import Activity from "./Activity";

const store = createStore(reducer, applyMiddleware(thunk));

describe("<Activity/>", () => {
  it("should render...", () => {
    rtl.render(
      <Provider store={store}>
        <Router>
          <Activity />
        </Router>
      </Provider>
    );
  });
});
