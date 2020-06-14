import React from "react";

function setGps (onSuccess, onError) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        localStorage.setItem("gps", JSON.stringify({ latitude, longitude }));
        console.log('setGps', latitude, longitude )
        if (onSuccess) onSuccess(position);
      },
      err => {
        console.error(err);
        if (onError) onError(err);
      },
      {
        timeout: 5000
      }
    );
  };
  
  function getGps () {
    const coords = localStorage.getItem("gps");
    if (coords) {
      console.log('getGPS coords', coords)
      return coords;
    }
  
    return { latitude: null, longitude: null };
  };
  
  export default { setGps, getGps };