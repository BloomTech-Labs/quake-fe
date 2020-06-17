import React from "react";
import Sort from "./Sort";
import * as rtl from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer as reducer } from "../../reducers/index";

const store = createStore(reducer, applyMiddleware(thunk));


describe("<Sort/>", () => {
    it("should render...", () => {
      rtl.render(
        <Provider store={store}>
        <Router>
          <Sort />
        </Router>
      </Provider>      );
    });
  });