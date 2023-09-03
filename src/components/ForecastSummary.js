import React from "react";
import iconData from "../data/iconData.json";

function ForecastSummary({ date, temperature, description, icon, onSelect }) {
  const dateHuman = new Date(date).toLocaleDateString("en-UK", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const weatherCode = `${icon.slice(0, 1)}00`;
  return (
    <div className="ForecastSummary" data-testid="ForecastSummary">
      <div className="ForecastSummary__date">{`${dateHuman}`}</div>
      <img
        className="ForecastSummary__icon"
        data-testid="SummaryIcon"
        src={iconData[weatherCode]}
        alt={description}
      />
      <div className="ForecastSummary__temperature">{`${temperature} °C`}</div>
      <div className="ForecastSummary__description">{description}</div>
      <button
        type="button"
        className="ForecastSummary__more_details"
        onClick={() => onSelect(date)}
      >
        More details
      </button>
    </div>
  );
}

export default ForecastSummary;
