import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuth from "./helpers/withAuth";
import EventsPage from "./pages/events";
import AuthPage from "./pages/auth";
import About from "./pages/About";
import Header from "./partials/Header";
import Glitch from "./pages/Glitch";
import Play from "./pages/Play";
import ImagesPage from "./pages/Images";
import { GlobalProvider } from "./context/GlobalState";
import teapot from "./pot.jpg";

function Home() {
  return (
    <div>
      <h2>
        <img className="Cup" src={teapot} alt="teapot"></img>
      </h2>
    </div>
  );
}
//NOTE for routepaths if they are 'withAuth: if their path has more then one word should have a hyphenbetween them - because that path will be grabbed for the message displayed back to the user for login details
//NOTE for withAuth, there is now a second paramter - which is passed down as a pathway that the user is redirected to, after they login or register. will potentially be refactored so that it is passed down as prop via location: state {} instead
class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about3e" component={About} />
            <Route path="/oOoOs" component={Glitch} />
            <Route path="/play" component={Play} />
            <Route path="/patches" render={() => <div>Patches</div>} />
            <Route path="/entryway" render={() => <div>Entry</div>} />
            <Route exact path="/auth" component={AuthPage} />
            <Route
              exact
              path="/events"
              component={withAuth(EventsPage, "/events")}
            />
            <Route
              exact
              path="/traces"
              component={withAuth(ImagesPage, "/traces")}
            />
          </Switch>
        </Router>
      </GlobalProvider>
    );
  }
}

export default App;
