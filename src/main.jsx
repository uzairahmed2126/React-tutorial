import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.body).render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
