import React from "react";
import ReactDOM from "react-dom";
import Temperature from "./Weather";

import "./App.css";

root.render(
    <StrictMode>
        <div className="App">
            <h1>React Events</h1>
            <Weather city = "Paris" temperature = {19} />
        </div>
    </StrictMode>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// ReactDOM.render(<App />, rootElement);