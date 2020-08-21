import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { WelaaaProvider } from "./components/welaaaContext";

ReactDOM.render(
  <React.StrictMode>
    <WelaaaProvider>
      <App />
    </WelaaaProvider>
  </React.StrictMode>,
  document.getElementById("wrapper")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
