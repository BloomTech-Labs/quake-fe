import React from "react";

import * as rtl from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { quakeFetch, updateSearchParams } from "../../actions";

import Filters from "./Filters";
import { getByTestId } from "@testing-library/react";

const mockStore = configureStore([]);

describe("Filters.js Tests", () => {
  let store;
  let filtersComponent;

  beforeEach(() => {
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

    store.dispatch = jest.fn();

    filtersComponent = renderer.create(
      <Provider store={store}>
        <Filters />
      </Provider>
    );
  });

  describe("Filters.js Snapshot", () => {
    it("Filters.js renders with mocked state", () => {
      expect(filtersComponent.toJSON()).toMatchSnapshot();
    });
  });

  describe("Dispatches Actions", () => {
    it("formSubmitCallback() dispatches actions", () => {
      const e = { preventDefault: () => {} };
      jest.spyOn(e, "preventDefault");

      renderer.act(() => {
        filtersComponent.root.findByType("form").props.onSubmit(e);
      });

      expect(e.preventDefault).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toHaveBeenCalledTimes(2); // quakeFetch always dispatches 2 actions
    });
  });
});
