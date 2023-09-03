import React from "react";

import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

function ForecastSummaries({ forecasts, onForecastSelect }) {
  return (
    <div className="ForecastSummaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          forecast={forecast}
          onSelect={onForecastSelect}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;
