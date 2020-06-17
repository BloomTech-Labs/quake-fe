import { quakeReducer } from "../reducers/quakeReducer";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(quakeReducer(undefined, {})).toEqual({
      quakes: [],
      quakeFetch: false,
      quakeFetchError: false,
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
