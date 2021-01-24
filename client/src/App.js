import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuth from "./helpers/withAuth";
import EventsPage from "./pages/events";
import AuthPage from "./pages/auth";
import ConvoTracesPage from "./pages/ConvoTraces";
import About from "./pages/About";
import Header from "./partials/Header";
import Glitch from "./pages/Glitch";
import ImagesPage from "./pages/Images";
import Sponges from "./components/sponges";
import Socketz from "./components/Socketz";

function Home() {
  return (
    <div>
      <h2>Home Hello</h2>
    </div>
  );
}
//NOTE for routepaths if they are 'withAuth: if their path has more then one word should have a hyphenbetween them - because that path will be grabbed for the message displayed back to the user for login details
//NOTE for withAuth, there is now a second paramter - which is passed down as a pathway that the user is redirected to, after they login or register. will potentially be refactored so that it is passed down as prop via location: state {} instead
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about3e" component={About} />
          <Route path="/oOoOs" component={Glitch} />
          <Route path="/sponges" component={Sponges} />
          <Route path="/socketz" component={Socketz} />

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
            path="/register-a-trace"
            component={withAuth(ImagesPage, "/register-a-trace")}
          />
          <Route
            exact
            path="/convotraces"
            component={withAuth(ConvoTracesPage, "/convotraces")}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
