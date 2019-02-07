import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Films from "./Films";
import People from "./People";
import Person from "./Person";

import FilmX from "./FilmX";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Link to="/">
            <button type="button" className="btn btn-primary">
              Go Home
            </button>
          </Link>
          <Link to="/films">
            <button type="button" className="btn btn-primary">
              View Films
            </button>
          </Link>
          <Link to="/people">
            <button type="button" className="btn btn-primary">
              View People
            </button>
          </Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/films" component={Films} />
            <Route path="/films/:id" component={FilmX} />
            <Route exact path="/people" component={People} />
            <Route path="/people/:id" component={Person} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
