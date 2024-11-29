import { useSelector } from "react-redux";
import cl from "./Stats.module.css";

export default function Stats() {
  const weatherData = useSelector((state) => state.weather.weather);
  let sunrise = new Date(weatherData.sunrise * 1000);
  let sunset = new Date(weatherData.sunset * 1000);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={cl.stats}>
      <div className={cl.section}>
        <h3>{Math.round(weatherData.maxTemp - 273.15)}°</h3>
        <p>Height</p>
      </div>
      <div className={cl.section}>
        <h3>{weatherData.wind}m/s</h3>
        <p>Wind</p>
      </div>
      <div className={cl.section}>
        <h3>{formatTime(sunrise)}</h3>
        <p>Sunrise</p>
      </div>
      <div className={cl.section}>
        <h3>{Math.round(weatherData.minTemp - 273.15)}°</h3>
        <p>Low</p>
      </div>
      <div className={cl.section}>
        <h3>{weatherData.humidity}%</h3>
        <p>humidity</p>
      </div>
      <div className={cl.section}>
        <h3>{formatTime(sunset)}</h3>
        <p>Sunset</p>
      </div>
    </div>
  );
}
