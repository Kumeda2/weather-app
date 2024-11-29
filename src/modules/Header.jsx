import Modal from "../UI/Modal/Modal";
import SearchBar from "../UI/SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import {
  setLoading,
  updateUserData,
  updateWeather,
} from "../store/weatherStore";
import { useState } from "react";
import { weatherAPICall } from "../utils/weatherAPI";

export default function Header() {
  const dispatch = useDispatch();
  const inputError = "You need to enter real city";
  const [isCorrectInput, setIsCorrectInput] = useState(true);

  const forecastSearch = async (city) => {
    if (!city) {
      setIsCorrectInput(false);
      return;
    }

    setIsCorrectInput(true);

    try {
      const weatherData = await weatherAPICall(city);

      if (weatherData.errorCode) {
        throw new Error("Error fetching weather data");
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
    } catch (error) {
      setIsCorrectInput(false);
    }
  };

  return (
    <>
      <div className="header">
        <div className="program-title">
          <p>WEATHER APP</p>
        </div>
        <div className="search-section">
          <SearchBar search={forecastSearch} />
        </div>
        {!isCorrectInput && (
          <Modal setvisibility={setIsCorrectInput}>{inputError}</Modal>
        )}
      </div>
    </>
  );
}
