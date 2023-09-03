import React from "react";

import "../styles/LocationDetails.css";

function LocationDetails({ location }) {
  if (!location) return null;

  return (
    <div className="LocationDetails">
      <h1>{`${location.city}, ${location.country}`}</h1>
    </div>
  );
}

export default LocationDetails;
