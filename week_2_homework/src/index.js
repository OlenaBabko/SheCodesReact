import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";

import "./App.css";

root.render(
    <StrictMode>
        <div className="App">
            <div>
                <h1>Weather Search Engine</h1>

                <Search  />

            </div>
        </div>
    </StrictMode>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// ReactDOM.render(<App />, rootElement);