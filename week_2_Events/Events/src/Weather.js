import React from "react";

export default function CurrentTemperature() {
  function Click() {
    alert("Coming soon...");
  }

  return (
    <div className="CurrentTemperature">
      <button onClick={Click}>Current Temperature</button>
    </div>
  );
}
// renders a "Current Temperature" button.
// is clicked, alert "Coming soon..." Add the button here.