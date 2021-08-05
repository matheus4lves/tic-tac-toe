import "./assets/styles/styles.css";
import React from "react";
import ReactDOM from "react-dom";

// My components
import Game from "./assets/components/Game";

if (module.hot) {
  module.hot.accept();
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("app"));
