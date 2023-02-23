import React from "react";
import ReactDOM from "react-dom";

import Forecast from "./Forecast";

import "./App.css";
import "./Forecast.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Forecast />

      <p className="signature">
        Coded by{" "}
        <a
          href="https://github.com/OlenaBabko"
          target="_blank"
          rel="noreferrer"
        >
          Olena Babko
        </a>
      </p>
    </div>
  </StrictMode>
);