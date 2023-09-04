import React, { useState, useEffect } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";
import ErrorMessage from "./ErrorMessage";
import getForecasts from "../requests/getForecasts";

function App() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [location, setLocation] = useState(null);
  const [forecasts, setForecasts] = useState([]);
  const [searchCityText, setSearchCityText] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const updateForecasts = (city) => {
    getForecasts(city)
      .then((data) => {
        setForecasts(data.forecasts);
        setLocation(data.location);
        setSelectedDate(data.forecasts[0].date);
        setErrorMessage(null);
      })
      .catch((error) => {
        setSelectedDate(0);
        setLocation(null);
        setForecasts([]);
        setErrorMessage(error.message);
      });
  };
  const changeCity = () => {
    updateForecasts(searchCityText);
  };
  useEffect(() => updateForecasts(), []);

  const selectedForecast = forecasts.find((forecast) => {
    return forecast.date === selectedDate;
  });
  return (
    <div className="App">
      <LocationDetails location={location} />
      <SearchForm
        onChangeCityText={setSearchCityText}
        onChangeCity={changeCity}
      />
      <ErrorMessage message={errorMessage} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={setSelectedDate}
      />
      <ForecastDetails forecast={selectedForecast} />
    </div>
  );
}

export default App;
