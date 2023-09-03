import React from "react";

import "../styles/ForecastSummary.css";

function ForecastSummary({ date, temperature, description, icon }) {
  const dateHuman = new Date(date).toLocaleDateString("en-UK", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="ForecastSummary" data-testid="ForecastSummary">
      <div className="ForecastSummary__date">{`${dateHuman}`}</div>
      <div
        className="ForecastSummary__icon"
        data-testid="SummaryIcon"
      >{`${icon}`}</div>
      <div className="ForecastSummary__temperature">{`${temperature}`} °C</div>
      <div className="ForecastSummary__description">{`${description}`}</div>
    </div>
  );
}

export default ForecastSummary;
