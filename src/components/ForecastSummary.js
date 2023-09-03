import React from "react";
import iconData from "../data/iconData.json";

function iconCodeToUrl(iconCode) {
  switch (Math.floor(iconCode / 100)) {
    case 2:
      return iconData.thunderstom;
    case 3:
      return iconData.drizzle;
    case 5:
      return iconData.rain;
    case 6:
      return iconData.snow;
    case 7:
      return iconData.atmosphere;
    case 8:
      if (iconCode === 800) return iconData.clear;
      return iconData.cloudy;
    default:
      return iconData.clear;
  }
}

function ForecastSummary({ forecast, onSelect }) {
  const dateHuman = new Date(forecast.date).toLocaleDateString("en-UK", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const iconUrl = iconCodeToUrl(forecast.icon);
  return (
    <div className="ForecastSummary" data-testid="ForecastSummary">
      <div className="ForecastSummary__date">{`${dateHuman}`}</div>
      <img
        className="ForecastSummary__icon"
        data-testid="SummaryIcon"
        src={iconUrl}
        alt={forecast.description}
      />
      <div className="ForecastSummary__temperature">{`${forecast.temperature.max} °C`}</div>
      <div className="ForecastSummary__description">{forecast.description}</div>
      <button
        type="button"
        className="ForecastSummary__more_details"
        onClick={() => onSelect(forecast.date)}
      >
        More details
      </button>
    </div>
  );
}

export default ForecastSummary;
