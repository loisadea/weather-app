import React from "react";

import ForecastSummary from "./ForecastSummary";

function ForecastSummaries({ forecasts }) {
  return (
    <div className="ForecastSummaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          temperature={forecast.temperature.max}
          description={forecast.description}
          icon={forecast.icon}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;
