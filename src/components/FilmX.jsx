import React, { Component, Fragment } from "react";
import "isomorphic-fetch";
import "bootstrap/dist/css/bootstrap.min.css";
import "es6-promise";

class FilmX extends Component {
  constructor() {
    super();

    this.state = {
      filmData: []
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(obj => {
        this.setState({ filmData: obj });
      });
  }

  render() {
    return (
      <Fragment>
        <ul class="list-group">
          <li class="list-group-item">
            <strong>Title:</strong> <p>{this.state.filmData.title}</p>
          </li>
          <li class="list-group-item">
            <strong>Description:</strong>{" "}
            <p> {this.state.filmData.description}</p>
          </li>
          <li class="list-group-item">
            <strong>Director:</strong> <p>{this.state.filmData.director}</p>
          </li>
          <li class="list-group-item">
            <strong>Producer:</strong> <p> {this.state.filmData.producer}</p>
          </li>
          <li class="list-group-item">
            <strong>Release Date:</strong>{" "}
            <p> {this.state.filmData.release_date}</p>
          </li>
          <li class="list-group-item">
            <strong>Score:</strong> <p> {this.state.filmData.rt_score}</p>
          </li>
          <li class="list-group-item">
            <strong>ID:</strong> <p> {this.state.filmData.id}</p>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default FilmX;
