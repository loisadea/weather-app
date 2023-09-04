import React from "react";
import "../styles/ErrorMessage.css";

function ErrorMessage({ message }) {
  if (!message) return null;
  return <div className="ErrorMessage">{message}</div>;
}

export default ErrorMessage;
