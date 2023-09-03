import React from "react";

import { render } from "@testing-library/react";

import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  const fakeLocation = {
    city: "Manchester",
    country: "UK",
  };
  it("renders the correct city and location props", () => {
    const { getByText } = render(<LocationDetails location={fakeLocation} />);
    expect(getByText("Manchester, UK")).toBeInstanceOf(HTMLHeadingElement);
  });
});
