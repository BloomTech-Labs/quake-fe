export const setGps = (onSuccess, onError) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        localStorage.setItem("gps", JSON.stringify({ latitude, longitude }));
        if (onSuccess) onSuccess(position);
      },
      (err) => {
        console.error(err);
        if (onError) onError(err);
      },
      {
        timeout: 5000,
      }
    );
  } else alert("Location Permission: Disabled, `Enable Device Location`")
};

export const getGps = () => {
  const coords = localStorage.getItem("gps");
  if (coords) {
    return coords;
  }
  return { latitude: null, longitude: null };
};
