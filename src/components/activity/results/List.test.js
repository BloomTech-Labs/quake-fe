import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer as reducer } from "../../../reducers/index";

import List from "./List";

const store = createStore(reducer, applyMiddleware(thunk));

describe("<List/>", () => {
  it("should render...", () => {
    rtl.render(
      <Provider store={store}>
        <Router>
          <List />
        </Router>
      </Provider>
    );
  });
});
