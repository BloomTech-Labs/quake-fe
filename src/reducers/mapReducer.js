import { UPDATE_VIEWPORT, JUMP_VIEWPORT } from "../actions/index.js";

export const initialMapState = {
  latitude: 37.78197,
  longitude: -121.93992,
  transition: 0,
  zoom: 4,
  width: "100%",
  height: "100%",
};

export const mapReducer = (state = initialMapState, action) => {
  switch (action.type) {
    // Runs every time a user moves the map with cursor
    case UPDATE_VIEWPORT:
      return {
        ...state,
        latitude: action.viewportInfo.latitude,
        longitude: action.viewportInfo.longitude,
        transition: 0,
        zoom: action.viewportInfo.zoom,
        width: action.viewportInfo.width,
        height: action.viewportInfo.height,
      };
    // Runs every time a user clicks the 'Jump' button in quake card
    case JUMP_VIEWPORT:
      return {
        ...state,
        width: action.jumpInfo.width,
        height: action.jumpInfo.height,
        latitude: action.jumpInfo.latitude,
        longitude: action.jumpInfo.longitude,
        transition: 500,
        zoom: 10,
      };
    default:
      return state;
  }
};
