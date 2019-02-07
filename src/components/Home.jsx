import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Home Page</h1>
          <p className="lead">Click to view Films/People.</p>
        </div>
      </div>
    );
  }
}

export default Home;
