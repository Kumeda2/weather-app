import { useDispatch, useSelector } from "react-redux";
import Forecast from "../modules/Forecast";
import Header from "../modules/Header";
import MainContent from "../modules/MainContent";
import {
  updateWeather,
  updateUserData,
  setLoading,
} from "../store/weatherStore";
import { useEffect, useState } from "react";
import Load from "../UI/Load/Load";
import { positionAPICall } from "../utils/positionAPI";
import { weatherAPICall } from "../utils/weatherAPI";
import { ERROR_PAGE_400, ERROR_PAGE_404, ERROR_PAGE_500 } from "../utils/paths";
import { useNavigate } from "react-router";

export default function Main() {
  const dispatch = useDispatch();
  const load = useSelector((state) => state.loading.isLoading);
  const navigator = useNavigate();

  useEffect(() => {
    getUserCity();

    const interval = setInterval(() => {
      getUserCity();
    }, 1200000);

    return () => clearInterval(interval);
  }, []);

  const getUserCity = async () => {
    try {
      const apiData = await positionAPICall();

      if (!apiData || !apiData[0]) {
        throw { code: 404, message: "City data is not available." };
      }

      const city = apiData[0].name;
      const weatherData = await weatherAPICall(city);

      if (!weatherData) {
        throw { code: 500, message: "Error fetching weather data." };
      }

      dispatch(
        updateUserData({
          city: weatherData.name,
          country: weatherData.sys.country,
        })
      );

      dispatch(
        updateWeather({
          minTemp: weatherData.main.temp_min,
          maxTemp: weatherData.main.temp_max,
          temp: weatherData.main.temp,
          sunrise: weatherData.sys.sunrise,
          sunset: weatherData.sys.sunset,
          pressure: weatherData.main.pressure,
          humidity: weatherData.main.humidity,
          wind: weatherData.wind.speed,
          feels: weatherData.main.feels_like,
          description: weatherData.weather[0].description,
          mainWeather: weatherData.weather[0].main,
        })
      );
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Error fetching location or weather data:", error.message);
      dispatch(setLoading(false));

      switch (error.code) {
        case 400:
          navigator(ERROR_PAGE_400);
          break;
        case 404:
          navigator(ERROR_PAGE_404);
          break;
        case 500:
        default:
          navigator(ERROR_PAGE_500);
      }
    }
  };

  return load ? (
    <Load />
  ) : (
    <div className="main-page">
      <Header />
      <MainContent />
      <Forecast />
    </div>
  );
}
