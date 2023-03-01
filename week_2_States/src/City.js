import React, { useState } from "react";

export default function City(props) {
    let [temperature, setTemperature] = useState(props.temperature);
  
    function fahrenheitTemperature(event) {
      event.preventDefault();
      let fahrenheit = Math.round((props.temperature * 9) / 5 + 32);
      alert(`The tewmperature in fahrenheit is ${fahrenheit}°F`);
      setTemperature(fahrenheit);
    }
    function celsiusTemperature(event) {
      event.preventDefault();
      setTemperature(props.temperature);
    }
  
    return (
      <div class="City">
        It is {temperature}{" "}
        <a href="/" onClick={celsiusTemperature}> °C
        </a>{" "}
        |{" "}
        <a href="/" onClick={fahrenheitTemperature}> °F
        </a>{" "}
        in {props.name}
      </div>
    );
  }