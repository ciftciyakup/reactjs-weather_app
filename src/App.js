import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePosition } from "use-position";
import Weather from "./components/Weather";

const App = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  const key = process.env.REACT_APP_WEATHER_API_KEY;
  const lang = navigator.language.split("-")[0];
  const getWeather = async (lat, lon) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=${lang}`
      );
      setWeather(data);
    } catch {
      alert("Veri alma işlemi başarısız.");
    }
  };
  useEffect(() => {
    latitude && longitude && getWeather(latitude, longitude);
  }, [latitude, longitude]);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="card text-center m-3 px-4">
        <Weather weather={weather} />
      </div>
    </div>
  );
};

export default App;
