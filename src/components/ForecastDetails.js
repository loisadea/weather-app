import React from "react";

import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  if (!forecast) return null;

  const dateHuman = new Date(forecast.date).toLocaleDateString("en-UK", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="ForecastDetails">
      <div className="ForecastDetails__date">{`${dateHuman}`}</div>
      <div className="ForecastDetails__min_temperature">
        <span className="ForecastDetails__min_temperature__label">
          Min temperature:
        </span>
        {`  ${forecast.temperature.min} °C`}
      </div>
      <div className="ForecastDetails__max_temperature">
        <span className="ForecastDetails__max_temperature__label">
          Max temperature:
        </span>
        {`  ${forecast.temperature.max} °C`}
      </div>
      <div className="ForecastDetails__humidity">
        <span className="ForecastDetails__humidity__label">Humidity:</span>
        {`  ${forecast.humidity}%`}
      </div>
      <div className="ForecastDetails__wind">
        <span className="ForecastDetails__wind__label">Wind:</span>
        {`  ${forecast.wind.speed}mph`}
      </div>
    </div>
  );
}

export default ForecastDetails;
