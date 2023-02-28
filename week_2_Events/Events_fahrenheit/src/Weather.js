import React from "react";

export default function Weather(props) {
    function fahrenheitTemperature(event) {
        event.preventDefault();
        let fahrenheit = (props.temperature * 9) / 5 + 32;
        alert(`The tewmperature in fahrenheit is ${Math.round(fahrenheit)}°F`);
    }

    return (
        <div className = "Weather">
        The temperature in {props.city} is {props.temperature}°C | {" "}
      <a href = "/" onClick = {fahrenheitTemperature()}> °F</a>
        </div>
    );
}
