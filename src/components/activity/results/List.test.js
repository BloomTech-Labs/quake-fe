import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
// import { rootReducer as reducers } from "../../../reducers/index";

import List from "./List";

const mockStore = configureStore([]);

describe("List.js Tests", () => {
  let store;
  let listComponent;

  beforeEach(() => {
    store = mockStore({
      quakeReducer: {
        quakes: [],
        quakeFetch: false,
        quakeFetchError: false,
        sortBy: "newest",
      }
    });

    listComponent = renderer.create(
      <Provider store={store}>
          <List />
      </Provider>
    );
  });

  it('should render with given state', () => {
    expect(listComponent.toJSON()).toMatchSnapshot();
  });

  // Empty quake array
  // Maps quake array
  // Searching for quakes
  // Error display
});
