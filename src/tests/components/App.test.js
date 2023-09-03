import React from "react";

import { render, screen } from "@testing-library/react";

import App from "../../components/App";

import data from "../../data/forecast.json";

describe("App", () => {
  test("renders App component correctly", () => {
    render(<App location={data.location} forecasts={data.forecasts} />);
    const h1Element = screen.getByText(/Welwyn Garden city, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});
