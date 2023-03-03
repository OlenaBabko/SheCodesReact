import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is 19°C in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className = "Search">
      
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="type your city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      
      <h2>{message}</h2>

    </div>
  );
}