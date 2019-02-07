import React, { Component } from 'react';
import "isomorphic-fetch";
import "bootstrap/dist/css/bootstrap.min.css";
import "es6-promise";

class Films extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          films: [
            {
              title: [],
              description: [],
              director: []
            }
          ]
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films`)
      .then(res => res.json())
      .then(filmData => {
        let filmList = filmData.map(film => {
          // for each item in the filmList, return a single object
          // with these three properties on it.
          return {
            title: film.title,
            description: film.description,
            director: film.director
          };
        });

        this.setState({
          films: filmList
        });
      });
  }

    

    render() {
        return this.state.films.map(item => {
            return (
                
              <div
                className="card text-white bg-secondary mb-1"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">{item.title}</div>
                <div className="card-body">
                  <h5 className="card-title">{item.director}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
              
            );
          }
        )
    }
}

export default Films;