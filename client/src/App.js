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

function Home() {
  return (
    <div>
      <h2>Home Hello</h2>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div
          class="
        root-container"
        >
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about3e" component={About} />
            <Route path="/oOoOs" component={Glitch} />
            <Route path="/patches" render={() => <div>Patches</div>} />
            <Route path="/entryway" component={Entryway} />
            <Route exact path="/auth" component={AuthPage} />
            <Route exact path="/events" component={withAuth(EventsPage)} />
            <Route exact path="/traces" component={withAuth(ImagesPage)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
