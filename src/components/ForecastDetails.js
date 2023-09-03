import React from "react";

import "../styles/ForecastDetails.css";

function ForecastDetails({ date, temperature, wind, humidity }) {
  const dateHuman = new Date(date).toLocaleDateString("en-UK", {
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
        {`  ${temperature.min} °C`}
      </div>
      <div className="ForecastDetails__max_temperature">
        <span className="ForecastDetails__max_temperature__label">
          Max temperature:
        </span>
        {`  ${temperature.max} °C`}
      </div>
      <div className="ForecastDetails__humidity">
        <span className="ForecastDetails__humidity__label">Humidity:</span>
        {`  ${humidity}%`}
      </div>
      <div className="ForecastDetails__wind">
        <span className="ForecastDetails__wind__label">Wind:</span>
        {`  ${wind.speed}mph`}
      </div>
    </div>
  );
}

export default ForecastDetails;
