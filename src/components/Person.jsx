import React, { Component, Fragment } from "react";
import "isomorphic-fetch";
import "bootstrap/dist/css/bootstrap.min.css";
import "es6-promise";

class Person extends Component {
  constructor() {
    super();

    this.state = {
      personData: []
    };
  }

  componentDidMount() {
    fetch(
      `https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`
    )
      .then(res => res.json())
      .then(obj => {
        this.setState({ personData: obj });
      });
  }

  render() {
    return (
      <Fragment>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Name:</strong> <p>{this.state.personData.name}</p>
          </li>
          <li className="list-group-item">
            <strong>Age:</strong>
            <p> {this.state.personData.age}</p>
          </li>
          <li className="list-group-item">
            <strong>Gender:</strong> <p>{this.state.personData.gender}</p>
          </li>
          <li className="list-group-item">
            <strong>Eye Color:</strong>{" "}
            <p> {this.state.personData.eye_color}</p>
          </li>
          <li className="list-group-item">
            <strong>Hair Color:</strong>
            <p> {this.state.personData.hair_color}</p>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Person;
