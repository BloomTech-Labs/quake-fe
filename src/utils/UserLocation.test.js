import "jest-extended";
import { getGps } from "./UserLocation";

describe("User Location getGps", () => {
  it("should return local storage", () => {
    expect(getGps()).toBeTruthy();
  });
  it("should return object", () => {
    expect(getGps()).toBeObject();
  });
});
