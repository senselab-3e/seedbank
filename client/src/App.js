import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuth from "./helpers/withAuth";
import EventsPage from "./pages/events";
import AuthPage from "./pages/auth";
import About from "./pages/About";
import Header from "./components/header";
import Glitch from "./pages/Glitch";
import "./index.css";
import { ThemeProvider } from "styled-components";

//NOTES: styled-components has full theming support by exporting a <ThemeProvider> wrapper component. This component provides a theme to all React components underneath itself via the context API. In the render tree all styled-components will have access to the provided theme, even when they are multiple levels deep.
//there are more notes on how to use style-components in the header component.

const theme = {
  mainBgColor: "rgb(34, 202, 160)",
  mainLightColor: "rgb(248, 248, 248)",
  mainDarkColor: "#777777",
  mainHighlightColor: "rgb(241, 59, 217)"
};

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
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
