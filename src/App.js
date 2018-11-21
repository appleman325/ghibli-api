import React, { Component } from 'react';
import logo from './logo.svg';
import Studio_Ghibli_logo from './Studio_Ghibli_logo.svg.png';
import FilmComponent from './FilmComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <br />
          <img className="logo-img" src={Studio_Ghibli_logo} width="50%" />
          <br />
          <br />
          <FilmComponent />
        </div>
      </div>
    );
  }
}

export default App;
