export const weatherAPICall = async (city) => {
  const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
  
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`
    );

    if (!response.ok) {
      throw {code: 404, message: "Error fetching weather data."};
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return {errorCode: error.code, errorMessage: error.message}
  }
};
