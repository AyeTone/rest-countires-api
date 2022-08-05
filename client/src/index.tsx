import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CountriesContextProvider } from "./Context/CountriesContext";
import { ThemeContextProvider } from "./Context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CountriesContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </CountriesContextProvider>
  </React.StrictMode>
);
