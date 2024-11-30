import { useEffect, useState } from "react";
import Stats from "../UI/Stats/Stats";
import { useSelector } from "react-redux";
import iceIcon from "../assets/free-icon-ice-4765598.png";
import cloudIcon from "../assets/free-icon-cloud-365228.png";
import fogIcon from "../assets/free-icon-fog-3750506.png";
import sunRainIcon from "../assets/free-icon-rain-365225.png";
import rainIcon from "../assets/free-icon-rain-365226.png";
import snowIcon from "../assets/free-icon-snowing-365231.png";
import stormIcon from "../assets/free-icon-storm-365235.png";
import sunIcon from "../assets/free-icon-sun-365237.png";
import tornadoIcon from "../assets/free-icon-tornado-365238.png";

export default function MainContent() {
  const weather = useSelector((state) => state.weather.weather);
  const userData = useSelector((state) => state.weather.userData);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    formatTime();

    const interval = setInterval(() => {
      formatTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    let date = new Date();
    let formatTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setCurrentTime(formatTime);
  };

  function getIcon() {
    switch (weather.mainWeather) {
      case "Snow":
        return { img: snowIcon };
      case "Thunderstorm":
        return { img: stormIcon };
      case "Drizzle":
        return { img: sunRainIcon };
      case "Rain":
        return { img: rainIcon };
      case "Clouds":
        return { img: cloudIcon };
      case "Atmosphere":
        return { img: tornadoIcon };
      case "Mist":
        return { img: fogIcon };
      case "Haze":
        return { img: iceIcon };
      default:
        return { img: sunIcon };
    }
  }

  return (
    <div className="main-content">
      <div className="header-content">
        <h1>
          {userData.city}, {userData.country}
        </h1>
        <h2>{currentTime}</h2>
      </div>
      <div className="body-content">
        <div className="overall-stats">
          <div className="img-holder">
            <img src={getIcon().img} />
          </div>
          <div className="overall-temp">
            <h1>{Math.round(weather.temp - 273.15)}°</h1>
            <p>Feels like {Math.round(weather.feels - 273.15)}°</p>
            <p>{weather.description}</p>
          </div>
        </div>
        <Stats />
      </div>
    </div>
  );
}
