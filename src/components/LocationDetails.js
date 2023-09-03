import React from "react";

import "../styles/LocationDetails.css";

function LocationDetails({ city, country }) {
  return (
    <div className="LocationDetails">
      <h1>{`${city}, ${country}`}</h1>
    </div>
  );
}

export default LocationDetails;
