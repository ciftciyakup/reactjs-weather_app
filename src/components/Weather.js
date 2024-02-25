import React, { Fragment } from "react";

// Bootstrap Classes
const imgClass = "card-img-top";
const cardBodyClass = "card-body";
const fontSizeClass = "fs-4";

const Weather = (props) => {
  const { weather } = props;
  if (!weather) return <p>Konum tespiti gerçekleştirilemedi...</p>;
  const { icon } = weather.weather[0];
  return (
    <Fragment>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
        className={imgClass}
        alt="icon"
      />
      <div className={cardBodyClass}>
        <h3>{weather.name}</h3>
        <p className={fontSizeClass}>
          {weather.weather
            .map((item) =>
              item.description
                .split(" ")
                .map((word) => word[0].toUpperCase() + word.substring(1))
                .join(" ")
            )
            .join(", ")}
          <br />
          {Math.round(weather.main.temp)}°C
          <br />
          {new Date(weather.dt * 1000).toLocaleDateString()}
        </p>
      </div>
    </Fragment>
  );
};

export default Weather;
