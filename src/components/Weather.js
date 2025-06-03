import React, { Fragment } from "react";

const Weather = (props) => {
  const { weather } = props;
  if (!weather) return <h1 className="my-3">Konum tespiti gerçekleştirilemedi...</h1>;
  const { icon } = weather.weather[0];
  return (
    <Fragment>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
        className="card-img-top"
        alt="icon"
      />
      <div className="card-body">
        <h1>{weather.name}</h1>
        <p className="fs-1">
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
