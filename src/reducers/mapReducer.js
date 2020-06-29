import { UPDATE_VIEWPORT } from "../actions/index.js";
  
  export const initialMapState = {
    latitude: 37.78197,
    longitude: -121.93992,
    zoom: 4,
    width: "100%",
    height: "100%",
  };
  
  export const mapReducer = (state = initialMapState, action) => {
    switch (action.type) {
      case UPDATE_VIEWPORT:
        return {
          ...state,
          latitude: action.viewportInfo.latitude,
          longitude: action.viewportInfo.longitude,
          zoom: action.viewportInfo.zoom,
          width: action.viewportInfo.width,
          height: action.viewportInfo.height,
        };
      default:
        return state;
    }
  };
  