import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import withAuth from "./helpers/withAuth"; //*temporarily disabled for testing purposes
import EventsPage from "./pages/EventsPage";
import AuthPage from "./pages/auth";
import Entryway from "./pages/Entryway";
import About from "./pages/About";
import Header from "./components/header";
import Glitch from "./pages/Glitch";
import Patch from "./pages/Patch";
import EventIntensities from "./components/EventIntensities";
import "./index.css";
import "./animation-library.css";
// import { ThemeProvider } from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import glitch from "./assets/img/404_glitch2.gif";

// import P5Wrapper from "react-p5-wrapper";

//NOTES: styled-components has full theming support by exporting a <ThemeProvider> wrapper component. This component provides a theme to all React components underneath itself via the context API. In the render tree all styled-components will have access to the provided theme, even when they are multiple levels deep.
//there are more notes on how to use style-components in the header component.
//background-image: url(${glitch});
//i'm still going to run some detaul themeing through the index.css for now.

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family: ${props => props.theme.font};
    background: ${props =>
      props.grabState === "/about"
        ? props.theme.palettes.g3.c1
        : props.theme.mainBgColor};
        background-image: ${props =>
          props.grabState === "/oOoOs" ? `url(${props.glitch})` : undefined};
  }
`;

//at the moment i'm passing most values to global style through the theme, including font style
const theme = {
  font: "clear sans",
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
      c1: "#42C4AF",
      c2: "#496666",
      c3: "#5B85C7",
      c4: "#C4A460",
      c5: "#9D7950"
    },
    g3: {
      c1: "#7FF6D0",
      c2: "#2384C9",
      c3: "#524E4F",
      c4: "#98B627",
      c5: "#DBCAA5"
    },
    g4: {
      c1: "#5B5455",
      c2: "#586F8F",
      c3: "#F4BF83",
      c4: "#909A94",
      c5: "#F4F6F4"
    },
    g5: {
      c1: "#273943",
      c2: "#b96221",
      c3: "#F4BE12",
      c4: "#A6B2A8",
      c5: "#F6F8F6"
    },
    g6: {
      c1: "#273943",
      c2: "#b96221",
      c3: "#F4BE12",
      c4: "#A6B2A8",
      c5: "#F6F8F6"
    },
    g7: {
      c1: "#4111B3",
      c2: "#351082",
      c3: "#73A69D",
      c4: "#D4D4B4",
      c5: "#0D0915"
    }
  }
};

//     <GlobalStyle whiteColor grabState={grabState()} glitch={glitch} />
//<Route exact path="/events" component={withAuth(EventsPage)} />

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: window.location.pathname,
      elementarray: [],
      minorLocations: [],
      isLogged: false
    };
    this.updateLocation = this.updateLocation.bind(this);
    this.updateArray = this.updateArray.bind(this);
    this.updateMinorLocations = this.updateMinorLocations.bind(this);
  }

  updateLocation = location =>
    this.setState({
      location: location.pathname
    });

  updateArray = array =>
    this.setState({
      elementarray: array
    });

  //the reason all these extra steps are requred is probably because the state value being passed into this function from child components is changing repeatedly, where
  //as the above functions are having static values passed into them an array value and a window.pathname -- where as below it is a this.state.objLoc which is  vlaue that outputs 2 nulls then a value
  // the isLogged way of preventing a the setState from being called to many times is not a perfect solution because once it's set to true, it will always take a value and the coniditon check will be null
  //so if i use this function in another component i'll need to re setState that value to false again --- OR refactor everything.
  // trying to call this function outside of the render in the childe component might solve the repeated calls -- but the value of this.state.events is only read at the render in EventIntensities so that value needs to passed into the function at that level. tricky.
  updateMinorLocations = objloc =>
    !this.state.isLogged
      ? this.setState({
          minorLocations: objloc,
          isLogged: true
        })
      : console.log("nothing");

  render() {
    //this is a total hack method to remove the dynamically created and appended dot classes from the randomLinkCreator Component.
    //refactorrrrrrr but for now....
    var currentDots = document.querySelectorAll(".dot");
    var currentThingy = document.querySelectorAll(".thingy");
    var currentEventlist = document.querySelectorAll(".database");
    var currentThreshold = document.querySelectorAll(".threshold"); ///this needs a wrapper container to be removed otherwise it unloads body tag
    // console.log(currentDots);
    if (this.state.location !== "/") {
      currentDots.forEach(e => {
        e.parentNode.remove();
      });
      currentThingy.forEach(m => {
        m.parentNode.remove();
      });
    }

    if (this.state.location !== "/eventintensities") {
      currentThreshold.forEach(element => {
        element.parentNode.remove();
      });
      currentEventlist.forEach(el => {
        el.parentNode.remove();
      });
    }

    //this can be brought back in to remove the presence of the pixel links on all over page views
    // else if (this.state.location !== "/patches") {
    //   currentDots.forEach(element => {
    //     element.parentNode.remove();
    //   });
    // }

    //---->Note: temporarily removed
    //<Route exact path="/events" component={withAuth(EventsPage)} />

    return (
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle
            whiteColor
            grabState={this.state.location}
            glitch={glitch}
          />
          <Header location={this.state.location} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Entryway updateLocation={this.updateLocation} />}
            />
            <Route
              path="/about"
              render={() => (
                <About
                  updateLocation={this.updateLocation}
                  minorLocations={this.state.minorLocations}
                />
              )}
            />
            <Route
              path="/oOoOs"
              render={() => <Glitch updateLocation={this.updateLocation} />}
            />
            <Route
              path="/patches"
              render={() => (
                <Patch
                  updateLocation={this.updateLocation}
                  updateArray={this.updateArray}
                  test={this.state.elementarray}
                />
              )}
            />
            <Route exact path="/auth" component={AuthPage} />
            <Route
              exact
              path="/events"
              render={() => <EventsPage updateLocation={this.updateLocation} />}
            />
            <Route
              exact
              path="/eventintensities"
              render={() => (
                <EventIntensities
                  updateLocation={this.updateLocation}
                  updateMinorLocations={this.updateMinorLocations}
                />
              )}
            />
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
