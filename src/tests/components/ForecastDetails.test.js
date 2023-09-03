import React from "react";

import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const fakeForecast = {
    date: 1692024554000,
    temperature: {
      max: 11,
      min: 4,
    },
    wind: {
      speed: 13,
      direction: "s",
    },
    humidity: 30,
    description: "Clear",
    icon: "800",
  };
  const fakeForecastComponent = (
    <ForecastDetails
      date={fakeForecast.date}
      temperature={fakeForecast.temperature}
      wind={fakeForecast.wind}
      humidity={fakeForecast.humidity}
    />
  );

  it("renders correctly", () => {
    const { asFragment } = render(fakeForecastComponent);
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows the date", () => {
    const { getByText } = render(fakeForecastComponent);
    expect(getByText("Mon, 14 Aug 2023")).toHaveClass("ForecastDetails__date");
  });

  it("shows the min temperature", () => {
    const { getByText } = render(fakeForecastComponent);
    expect(getByText(/Min temperature:/)).toBeInTheDocument();
    expect(getByText(/4 °C/)).toBeInTheDocument();
  });

  it("shows the max temperature", () => {
    const { getByText } = render(fakeForecastComponent);
    expect(getByText(/Max temperature:/)).toBeInTheDocument();
    expect(getByText(/11 °C/)).toBeInTheDocument();
  });

  it("shows the humidty", () => {
    const { getByText } = render(fakeForecastComponent);
    expect(getByText(/Humidity:/)).toBeInTheDocument();
    expect(getByText(/30%/)).toBeInTheDocument();
  });

  it("shows the wind", () => {
    const { getByText } = render(fakeForecastComponent);
    expect(getByText(/Wind:/)).toBeInTheDocument();
    expect(getByText(/13mph/)).toBeInTheDocument();
  });
});
