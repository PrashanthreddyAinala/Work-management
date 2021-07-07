// import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Data } from "./context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <Data>
      <App />
    </Data>
  </>,
  rootElement
);
