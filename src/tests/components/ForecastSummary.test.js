import React from "react";

import { render, screen } from "@testing-library/react";

import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const fakeForecast = {
    date: 1692197354000,
    temperature: {
      max: 1,
      min: -2,
    },
    description: "Heavy Snow",
    icon: "602",
  };

  it("shows the date", () => {
    render(<ForecastSummary forecast={fakeForecast} />);
    const element = screen.getByText(/Wed, 16 Aug 2023/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("ForecastSummary__date");
  });

  it("shows the icon", () => {
    render(<ForecastSummary forecast={fakeForecast} />);
    const element = screen.getByTestId("SummaryIcon");
    expect(element).toBeInTheDocument();
  });

  it("shows the temperature", () => {
    render(<ForecastSummary forecast={fakeForecast} />);
    const element = screen.getByText(/1 °C/i);
    expect(element).toBeInTheDocument();
  });

  it("shows the description", () => {
    render(<ForecastSummary forecast={fakeForecast} />);
    const element = screen.getByText(/Heavy Snow/i);
    expect(element).toBeInTheDocument();
  });
});
