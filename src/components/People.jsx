import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";

class People extends Component {
  constructor() {
    super();

    this.state = {
      people: [
        {
          name: [],
          age: [],
          gender: [],
          id: []
        }
      ]
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/people`)
      .then(res => res.json())
      .then(peopleData => {
        let peopleList = peopleData.map(people => {
          // for each item in the peopleList, return a single object
          // with these three properties on it.
          return {
            name: people.name,
            age: people.age,
            gender: people.gender,
            id: people.id
          };
        });

        this.setState({
          people: peopleList
        });
      });
  }

  render() {
    return this.state.people.map(item => {
      return (
        <div
          className="card text-white bg-secondary mb-1"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">{item.name}</div>
          <div className="card-body">
            <h5 className="card-title">{item.age}</h5>
            <p className="card-text">{item.gender}</p>
            <a
              href={`/people/${item.id}`}
              className="btn btn-primary"
              rel="noopener noreferrer"
            >
              Show me {item.name}'s details!
            </a>
          </div>
        </div>
      );
    });
  }
}
export default People;
