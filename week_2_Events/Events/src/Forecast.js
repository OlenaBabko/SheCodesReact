import React from "react";

export default function Forecast() {
  function seeForecast(event) {
    event.preventDefault();
    alert("Forecast feature is not ready yet");
  }

  return (
    <div className="seeForecast">
      <a href="/" onClick={seeForecast}>
        See Forecast
      </a>
    </div>
  );
}
// renders a link "See forecast".
// alert "Forecast feature is not ready yet"
