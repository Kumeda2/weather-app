export const positionAPICall = () => {
  const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${weatherApiKey}`
          );

          if (!response.ok) {
            reject({ code: 500, message: "Failed to fetch weather data" });
          }

          const data = await response.json();
          resolve(data);
        },
        () => {
          const data = "default";
          resolve(data);
        }
      );
    } else {
      const data = "default";
      resolve(data);
    }
  });
};
