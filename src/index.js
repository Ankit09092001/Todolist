import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./document/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
