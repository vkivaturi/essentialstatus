import React from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './Items.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor() {
    super();

  }


  render() {

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">          
                <img src="ACL.png" width="60" height="60" alt="" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Sampoorna store <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Vegetable vendor</a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="container">
          <div class="row">
          </div>
          <div class="row">
            <div>
              <div class="row" >
                <div class="container margin-5">
                  <br></br>
                <h4 class="text-primary">Crowd sourcing. Essential items availability status </h4>
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
