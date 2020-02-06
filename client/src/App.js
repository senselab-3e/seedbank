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

//i'm still going to run some detaul themeing through the index.css for now.
const theme = {
  mainBgColor: "rgb(34, 202, 160)",
  menuLightColor: "rgb(248, 248, 248)",
  menuDarkColor: "#777777",
  menuHighlightColor: "rgb(241, 59, 217)",
  colors: {
    main: "rgb(34, 202, 160)",
    secondary: "#777777",
    pinkestpink: "deeppink"
  },
  palettes: {
    g1: {
      c1: "#443035",
      c2: "#535C7B",
      c3: "#70A4A2",
      c4: "#96C3B9",
      c5: "#F0E1D7"
    },
    g2: {
      c1: "#D44024",
      c2: "#E1AD3B",
      c3: "#E9DDBF",
      c4: "#98761D",
      c5: "#2E2D13"
    },
    g3: {
      c1: "#5A4C82",
      c2: "#9281B4",
      c3: "#6999BD",
      c4: "#99DDE9",
      c5: "#EBE5DB"
    },
    g4: {
      c1: "#5B5455",
      c2: "#586F8F",
      c3: "#F4BF83",
      c4: "#909A94",
      c5: "#F4F6F4"
    }
  }
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
            <Route path="/about" component={About} />
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
