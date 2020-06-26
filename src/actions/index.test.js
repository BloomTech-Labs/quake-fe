import { quakeReducer } from "../reducers/quakeReducer";
import { searchReducer } from "../reducers/searchReducer";
import "jest-extended";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(quakeReducer(undefined, {})).toEqual({
      quakes: [],
      quakeFetch: false,
      quakeFetchError: false,
      sortBy: "newest",
    });
  });

  it("should handle QUAKE_FETCH", () => {
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

  it("should handle QUAKE_FETCH_ERROR", () => {
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
});

it("should handle DISPLAY_QUAKES", () => {
  expect(quakeReducer([], { type: "DISPLAY_QUAKES" })).toBeArray();
});

it("should handle SORT_QUAKES", () => {
  expect(quakeReducer([], { type: "SORT_QUAKES" })).toBeObject();
});

describe("Searchreducer", () => {
  it("should return object", () => {
    expect(searchReducer(undefined, {})).toBeObject();
  });
});
