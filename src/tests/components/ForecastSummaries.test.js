import React from "react";

import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const fakeForecasts = [
    {
      date: 1692197354000,
      temperature: {
        max: 1,
        min: -2,
      },
      description: "Heavy Snow",
      icon: "602",
    },
    {
      date: 1692283754000,
      temperature: {
        max: 20,
        min: 4,
      },
      description: "Tornado",
      icon: "781",
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries forecasts={fakeForecasts} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("has 2 forecasts", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={fakeForecasts} />
    );
    expect(getAllByTestId("ForecastSummary")).toHaveLength(2);
  });
});
