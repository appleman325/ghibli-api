import React, { Component } from 'react';

const FilmColumn = props => {
  const cols = props.results.map((result, index) => {
    return(
      <div className="col-md-4 film_box" key={index}>
        <div className="film_inner_box">
          <h4>{result.title}</h4>
          <p>Director: {result.director}</p>
          <p className="film_detail">{result.description}</p>
        </div>
      </div>
    );
  });

  return <div className="row">{cols}</div>
}

class Film extends Component {
  render() {
    const {results} = this.props;

    return(
      <FilmColumn
        results={results}
      />
    );
  }
}

export default Film;
