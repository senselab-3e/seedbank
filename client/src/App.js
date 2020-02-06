import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuth from "./helpers/withAuth";
import EventsPage from "./pages/events";
import AuthPage from "./pages/auth";
import About from "./pages/About";
import Header from "./components/header";
import Glitch from "./pages/Glitch";
import "./index.css";

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
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about3e" component={About} />
          <Route path="/oOoOs" component={Glitch} />
          <Route
            path="/patches"
            render={() => (
              <div style={{ backgroundColor: "#777777" }}>Patches</div>
            )}
          />
          <Route path="/entryway" render={() => <div>Entry</div>} />
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/events" component={withAuth(EventsPage)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
