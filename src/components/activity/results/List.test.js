import React from "react";

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import List from "./List";

const mockStore = configureStore([]);

describe("List.js Tests", () => {
  let store;
  let listComponent;

  describe("List.js Snapshot", () => {
    it("List.js renders with mocked state", () => {
      store = mockStore({
        quakeReducer: {
          quakes: [],
          quakeFetch: false,
          quakeFetchError: false,
          sortBy: "newest",
        },
      });

      listComponent = renderer.create(
        <Provider store={store}>
          <List />
        </Provider>
      );
      expect(listComponent.toJSON()).toMatchSnapshot();
    });
  });

  // Empty quake array
  describe("Empty Quake Array Condition", () => {
    it("Renders no quakes message", () => {
      store = mockStore({
        quakeReducer: {
          quakes: [],
          quakeFetch: false,
          quakeFetchError: false,
          sortBy: "newest",
        },
      });

      const { queryByTestId } = rtl.render(
        <Provider store={store}>
          <List />
        </Provider>
      );

      expect(queryByTestId(/empty-quakes/i)).toBeTruthy();
      expect(queryByTestId(/mapped-quake/i)).toBeNull();
      expect(queryByTestId(/quake-search/i)).toBeNull();
      expect(queryByTestId(/quake-error/i)).toBeNull();
    });
  });

  // Maps quake array
  describe("Card Map Condition", () => {
    it("Maps quake results", () => {
      store = mockStore({
        quakeReducer: {
          quakes: [
            {
              type: "Feature",
              properties: {
                mag: 3.7,
                place: "26 km SW of Goldfield, Nevada",
                time: 1594243664887,
                updated: 1594261197492,
                tz: null,
                url:
                  "https://earthquake.usgs.gov/earthquakes/eventpage/nn00758288",
                detail:
                  "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nn00758288&format=geojson",
                felt: 4,
                cdi: 2.7,
                mmi: 3.33,
                alert: null,
                status: "reviewed",
                tsunami: 0,
                sig: 212,
                net: "nn",
                code: "00758288",
                ids: ",nn00758288,us7000akeq,",
                sources: ",nn,us,",
                types: ",dyfi,moment-tensor,origin,phase-data,shakemap,",
                nst: 28,
                dmin: 0.269,
                rms: 0.1421,
                gap: 61.59,
                magType: "ml",
                type: "earthquake",
                title: "M 3.7 - 26 km SW of Goldfield, Nevada",
              },
              geometry: {
                type: "Point",
                coordinates: [-117.4392, 37.5281, 9.1],
              },
              id: "nn00758288",
            },
          ],
          quakeFetch: false,
          quakeFetchError: false,
          sortBy: "newest",
        },
      });

      const { queryByTestId } = rtl.render(
        <Provider store={store}>
          <List />
        </Provider>
      );

      expect(queryByTestId(/empty-quakes/i)).toBeNull();
      expect(queryByTestId(/mapped-quake/i)).toBeTruthy();
      expect(queryByTestId(/quake-search/i)).toBeNull();
      expect(queryByTestId(/quake-error/i)).toBeNull();
    });
  });

  // Searching for quakes
  describe("Quake Search Condition", () => {
    it("Renders search message", () => {
      store = mockStore({
        quakeReducer: {
          quakes: [],
          quakeFetch: true,
          quakeFetchError: false,
          sortBy: "newest",
        },
      });

      const { queryByTestId } = rtl.render(
        <Provider store={store}>
          <List />
        </Provider>
      );

      expect(queryByTestId(/empty-quakes/i)).toBeNull();
      expect(queryByTestId(/mapped-quake/i)).toBeNull();
      expect(queryByTestId(/quake-search/i)).toBeTruthy();
      expect(queryByTestId(/quake-error/i)).toBeNull();
    });
  });

  // Error display
  describe("Quake Error Condition", () => {
    it("Renders error message", () => {
      store = mockStore({
        quakeReducer: {
          quakes: [],
          quakeFetch: false,
          quakeFetchError: true,
          sortBy: "newest",
        },
      });

      const { queryByTestId } = rtl.render(
        <Provider store={store}>
          <List />
        </Provider>
      );

      expect(queryByTestId(/empty-quakes/i)).toBeNull();
      expect(queryByTestId(/mapped-quake/i)).toBeNull();
      expect(queryByTestId(/quake-search/i)).toBeNull();
      expect(queryByTestId(/quake-error/i)).toBeTruthy();
    });
  });
});
