import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useTheme } from "./context/GlobalState";
// import styled from "styled-components";

import withAuth from "./helpers/withAuth";

import EventsPage from "./pages/events";
import AuthPage from "./pages/auth";
import About from "./pages/About";
import Header from "./partials/Header";
import Glitch from "./pages/Glitch";
import Play from "./pages/Play";
import ImagesPage from "./pages/Images";
import EeE from "./pages/EEE";
import teapot from "./pot.jpg";

function Home() {
  return (
    <div>
      <img className="Cup" src={teapot} alt="teapot"></img>
    </div>
  );
}

//NOTE for routepaths if they are 'withAuth: if their path has more then one word should have a hyphenbetween them - because that path will be grabbed for the message displayed back to the user for login details
//NOTE for withAuth, there is now a second paramter - which is passed down as a pathway that the user is redirected to, after they login or register. will potentially be refactored so that it is passed down as prop via location: state {} instead
function App(props) {
  // const themeToggle = useTheme();

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about3e" component={About} />
          <Route path="/oOoOs" component={Glitch} />
          <Route path="/play" component={Play} />
          <Route path="/patches" component={EeE} />
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
    </React.Fragment>
  );
}

export default App;
