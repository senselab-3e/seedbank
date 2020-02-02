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
import Header from "./partials/Header";
import Glitch from "./pages/Glitch";

const MainPage = () => {
  return (
    <div>
      <p>o0Oo0o 3ntryw4y o0oO0o</p>
      <br />
      <Link to="/events">Go to events</Link>
      <Link to="/auth">Login or signup</Link>
    </div>
  );
};

// const OoOoO = () => {
//   return (
//     <div>
//       <h2>glitch </h2>
//     </div>
//   );
// };

const Patches = () => {
  return <h3>Patches</h3>;
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home Login</Link>
                </li>
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
              <Glitch />
            </Route>
            <Route path="/patches">
              <Patches />
            </Route>
            <Route exact path="/auth" component={AuthPage} />

            <Route exact path="/events" component={withAuth(EventsPage)} />
            <Route exact path="/" component={MainPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
