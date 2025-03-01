// External dependencies
import React from "react";
import { createRoot } from "react-dom/client";

// Styles
import "./styles.css";

// import Game from "./components/Game";

// Create root element dynamically
let rootElement = document.querySelector("#root");
if (!rootElement) {
  rootElement = document.createElement("div");
  rootElement.id = "root";
  document.body.appendChild(rootElement);
}

const root = createRoot(rootElement);
// root.render(<Game />);
root.render(<h1>Is it working?</h1>);
