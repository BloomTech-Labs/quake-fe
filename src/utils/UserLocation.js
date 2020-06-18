export const setGps = (onSuccess, onError) => {
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
};

export const getGps = () => {
  const coords = localStorage.getItem("gps");
  if (coords) {
    return coords;
  }
  return { latitude: null, longitude: null };
};
