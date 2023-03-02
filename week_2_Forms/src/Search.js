import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");
  
  function handleSearch(event) {
    event.preventDefault();
    // alert(`Searching for {city}...`);
    if (city.length > 0) {
      alert(`Searching for {city}...`);
    } else {
      alert("Enter your city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="search" placeholder="type your city" onchange = {updateCity} />
      <input type="button" value = "Search" />
    </form>
  );
}