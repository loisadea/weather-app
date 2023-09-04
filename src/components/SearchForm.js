import React from "react";
import "../styles/SearchForm.css";

function SearchForm({ onChangeCity, onChangeCityText }) {
  return (
    <div className="SearchForm">
      <input
        type="text"
        placeholder="Choose a different city..."
        onChange={(event) => onChangeCityText(event.target.value)}
      />
      <button type="submit" onClick={() => onChangeCity()}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
