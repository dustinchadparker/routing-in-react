import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Home Page</h1>
          <p class="lead">Click to view Films/People.</p>
        </div>
      </div>
    );
  }
}

export default Home;
