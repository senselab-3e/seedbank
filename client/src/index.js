import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
import { GlobalProvider } from "./context/GlobalState";
// import { BrowserRouter as Router } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <GlobalProvider theme={{ mode: "light" }}>
    <App />
  </GlobalProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
