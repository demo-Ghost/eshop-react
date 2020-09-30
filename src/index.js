import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/app";

// Main entry point for stylesheets + Bootstrap 4
import "./styles/main.scss";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
