import React from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './Items.js';

class App extends React.Component {

  constructor() {
    super();

  }
  

  render() {

    return (
      <div>
          <nav class="navbar navbar-light bg-dark text-light">
            <a class="navbar-brand" href="#">
              <img src="ACL.png" width="60" height="60" alt="" />
            </a>
            <h5>Crowd sourcing. Essential items availability status </h5>
          </nav>

        <div class="container">
          <div class="row">
          </div>
          <div class="row">
            <div>
              <div class="row merged20" id="page-contents">
                <div>
                  <Items />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
