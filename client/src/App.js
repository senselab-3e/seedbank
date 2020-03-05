import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalState";
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

import Signature from "./components/Signature";

function Home() {
  return (
    <div>
      <Signature />
      <img className="Cup" src={teapot} alt="teapot"></img>
    </div>
  );
}

//NOTE for routepaths if they are 'withAuth: if their path has more then one word should have a hyphenbetween them - because that path will be grabbed for the message displayed back to the user for login details
//NOTE for withAuth, there is now a second paramter - which is passed down as a pathway that the user is redirected to, after they login or register. will potentially be refactored so that it is passed down as prop via location: state {} instead
//NOTE wrapping the component in the route keeps it from re-rending when the nav button for that route is clicked repeatedly. This is why Play has been taken out of the inline, for now.

function App() {
  // const themeToggle = useTheme();

  return (
    <React.Fragment>
      <GlobalProvider theme={{ mode: "light" }}>
        <Router>
          <Header />
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about3e" component={About} />
              <Route path="/oOoOs" component={Glitch} />
              <Route path="/play">
                <Play />
              </Route>
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
          </div>
        </Router>
      </GlobalProvider>
    </React.Fragment>
  );
}

export default App;
