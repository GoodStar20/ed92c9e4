import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.js";

import "./scss/body.scss";
import "./scss/app.scss";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
