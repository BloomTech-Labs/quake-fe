import { quakeReducer } from "./quakeReducer";
import { searchReducer } from "./searchReducer";
import { mapReducer } from "./mapReducer";
import "jest-extended";

describe("quakeReducer", () => {
  it("should return the initial state", () => {
    expect(quakeReducer(undefined, {})).toEqual({
      quakes: [],
      quakeFetch: false,
      quakeFetchError: false,
      sortBy: "newest",
    });
  });

  it("QUAKE_FETCH", () => {
    expect(
      quakeReducer([], {
        type: "QUAKE_FETCH",
      })
    ).toEqual({
      quakes: [],
      quakeFetch: true,
      quakeFetchError: false,
    });
  });

  it("QUAKE_FETCH_ERROR", () => {
    expect(
      quakeReducer([], {
        type: "QUAKE_FETCH_ERROR",
      })
    ).toEqual({
      quakes: [],
      quakeFetch: false,
      quakeFetchError: true,
    });
  });

  it("DISPLAY_QUAKES", () => {
    expect(quakeReducer([], { type: "DISPLAY_QUAKES" })).toBeArray();
  });

  it("SORT_QUAKES", () => {
    expect(quakeReducer([], { type: "SORT_QUAKES" })).toBeObject();
  });
});

describe("searchReducer", () => {
  it("should return object", () => {
    expect(searchReducer(undefined, {})).toBeObject();
  });
});

describe("mapReducer", () => {
  const initialMapState = {
    latitude: 37.78197,
    longitude: -121.93992,
    transition: 0,
    zoom: 4,
    width: "100%",
    height: "100%",
  };

  const viewportInfo = {
    latitude: 57.78197,
    longitude: -132.83995,
    transition: 0,
    zoom: 4,
    width: "100%",
    height: "100%",
  };

  const jumpInfo = {
    latitude: 57.78197,
    longitude: -132.83995,
    transition: 500,
    zoom: 10,
    width: "100%",
    height: "100%",
  };

  describe("UPDATE_VIEWPORT", () => {
    it("Returned State Should Match 'viewportInfo'", () => {
      expect(
        mapReducer(initialMapState, { type: "UPDATE_VIEWPORT", viewportInfo })
      ).toEqual(viewportInfo);
    });

    it("Returned State Should Not Match 'initialState", () => {
      expect(
        mapReducer(initialMapState, { type: "UPDATE_VIEWPORT", viewportInfo })
      ).not.toEqual(initialMapState);
    });
  });

  describe("JUMP_VIEWPORT", () => {
    it("Returned State Should Match 'jumpInfo'", () => {
      expect(
        mapReducer(initialMapState, { type: "JUMP_VIEWPORT", jumpInfo })
      ).toEqual(jumpInfo);
    });

    it("Returned State Should Not Match 'initialState", () => {
      expect(
        mapReducer(initialMapState, { type: "JUMP_VIEWPORT", jumpInfo })
      ).not.toEqual(initialMapState);
    });
  });
});
