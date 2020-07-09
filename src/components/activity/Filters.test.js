import React from "react";

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { quakeFetch, updateSearchParams } from "../../actions";

import Filters from "./Filters";

const mockStore = configureStore([]);

describe("Filters.js Tests", () => {
  let store;
  let filtersComponent;

  describe("Filters.js Snapshot", () => {
    it("List.js renders with mocked state", () => {
      store = mockStore({
        searchReducer: {
          starttime: "2020-01-01",
          endtime: "2020-01-02",
          minmagnitude: 3,
          maxmagnitude: 10,
          maxradiuskm: 5000,
          latitude: 37.78197,
          longitude: -121.93992,
          placename: "",
        },
      });

      filtersComponent = renderer.create(
        <Provider store={store}>
          <Filters />
        </Provider>
      );
      expect(filtersComponent.toJSON()).toMatchSnapshot();
    });
  });

  // describe("Empty Quake Array Condition", () => {
  //   it("Renders no quakes message", () => {
  //     store = mockStore({
  //       quakeReducer: {
  //         quakes: [],
  //         quakeFetch: false,
  //         quakeFetchError: false,
  //         sortBy: "newest",
  //       },
  //     });

  //     const { queryByTestId } = rtl.render(
  //       <Provider store={store}>
  //         <List />
  //       </Provider>
  //     );

  //     expect(queryByTestId(/empty-quakes/i)).toBeTruthy();
  //     expect(queryByTestId(/mapped-quake/i)).toBeNull();
  //     expect(queryByTestId(/quake-search/i)).toBeNull();
  //     expect(queryByTestId(/quake-error/i)).toBeNull();
  //   });
  // });
});
