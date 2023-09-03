import React, { useState } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find((forecast) => {
    return forecast.date === selectedDate;
  });

  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={setSelectedDate}
      />
      <ForecastDetails
        date={selectedForecast.date}
        temperature={selectedForecast.temperature}
        wind={selectedForecast.wind}
        humidity={selectedForecast.humidity}
      />
    </div>
  );
}

export default App;
