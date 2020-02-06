import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById("root");

ReactDOM.render(<App />, rootEl);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}
