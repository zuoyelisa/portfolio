import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.scss";
import Home from "./containers/Home";
import Applications from "./containers/Applications";
import Websites from "./containers/Websites";
import Animations from "./containers/Animations";
import Otherworks from "./containers/Otherworks";
import CV from "./containers/CV";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/applications/" component={Applications} />
            <Route path="/websites/" component={Websites} />
            <Route path="/animations/" component={Animations} />
            <Route path="/other_works/" component={Otherworks} />
            <Route path="/cv/" component={CV} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
