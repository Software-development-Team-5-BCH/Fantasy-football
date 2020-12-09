import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App /> {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>,
  document.getElementById("root")
);

