import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuth from "./helpers/withAuth";
import EventsPage from "./pages/events";
import AuthPage from "./pages/auth";
import About from "./pages/About";
import Header from "./partials/Header";
import Glitch from "./pages/Glitch";
import ImagesPage from "./pages/Images";
import Entryway from "./pages/Entryway";
import Traces from "./pages/Traces";

import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      patchColor: "#ff03ea",
    };
    this.colorCapture = this.colorCapture.bind(this);
  }

  colorCapture(val) {
    console.log(val, "applevel");
    this.setState({ patchColor: val });
  }

  render() {
    return (
      <Router>
        <div
          className="
          root-container"
        >
          <Header
            colorCapture={this.colorCapture}
            patchColor={this.state.patchColor}
          />
          <div className="mainContainer">
            <Switch>
              <Route exact path="/" component={Traces} />
              <Route path="/about3e" component={About} />
              <Route path="/oOoOs" component={Glitch} />
              <Route path="/patches" render={() => <div>Patches</div>} />
              <Route path="/entryway">
                <Entryway patchColor={this.state.patchColor} />
              </Route>
              <Route exact path="/auth" component={AuthPage} />
              <Route exact path="/events" component={withAuth(EventsPage)} />
              <Route exact path="/traces" component={ImagesPage} />
            </Switch>
          </div>
          <footer></footer>
        </div>
      </Router>
    );
  }
}

export default App;
