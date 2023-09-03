import React from "react";

import { render, screen } from "@testing-library/react";

import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  it("shows the date", () => {
    render(<ForecastSummary date={1692024554000} icon="800" />);
    const element = screen.getByText(/Mon, 14 Aug 2023/i);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("ForecastSummary__date");
  });

  it("shows the icon", () => {
    render(<ForecastSummary icon="601" />);
    const element = screen.getByTestId("SummaryIcon");
    expect(element).toBeInTheDocument();
  });

  it("shows the temperature", () => {
    render(<ForecastSummary temperature={30} icon="800" />);
    const element = screen.getByText(/30 °C/i);
    expect(element).toBeInTheDocument();
  });

  it("shows the description", () => {
    render(<ForecastSummary description="This is a sunny day" icon="800" />);
    const element = screen.getByText(/This is a sunny day/i);
    expect(element).toBeInTheDocument();
  });
});
