import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
  //   useRouteMatch,
  //   useParams
} from "react-router-dom";
import withAuth from "./helpers/withAuth";
import EventsPage from "./pages/events";
import AuthPage from "./pages/auth";
import About from "./pages/About";

const MainPage = () => {
  return (
    <div>
      <p>o0Oo0o 3ntryw4y o0oO0o</p>
      <br />
      <Link to="/events">Go to events</Link>
      <br />
      <br />
      <Link to="/auth">Login or signup</Link>
      <Link to="/about3e">3E About</Link>
      <Link to="/oOoOs">404 oOoO Portal</Link>
      <Link to="/patches">Patches</Link>
    </div>
  );
};

function oOoO() {
  return <h2>oOoO</h2>;
}

function Patches() {
  return <h2>Patches</h2>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/entryway">EntryWay</Link>
              </li>
              <li>
                <Link to="/about3e">3E About</Link>
              </li>
              <li>
                <Link to="/oOoOs">404 oOoO Portal</Link>
              </li>
              <li>
                <Link to="/patches">Patches</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/about3e">
            <About />
          </Route>
          <Route path="/oOoOs">
            <oOoO />
          </Route>
          <Route path="/patches">
            <Patches />
          </Route>
          <Route exact path="/auth" component={AuthPage} />

          <Route exact path="/events" component={withAuth(EventsPage)} />
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
