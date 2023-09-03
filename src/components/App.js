import React, { useState, useEffect } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecasts from "../requests/getForecasts";

function App() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [location, setLocation] = useState(null);
  const [forecasts, setForecasts] = useState([]);
  useEffect(() => {
    getForecasts().then((data) => {
      setForecasts(data.forecasts);
      setLocation(data.location);
      setSelectedDate(data.forecasts[0].date);
    });
  }, []);

  const selectedForecast = forecasts.find((forecast) => {
    return forecast.date === selectedDate;
  });
  return (
    <div className="App">
      <LocationDetails location={location} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={setSelectedDate}
      />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
}

export default App;
