import React from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './Items.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

class App extends React.Component {

  constructor() {
    super();

  }


  render() {

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">            <img src="ACL.png" width="60" height="60" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#sampoorna">Sampoorna store</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


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
