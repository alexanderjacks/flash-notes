import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Routes from './Routes';
import logo from './cards.svg';
import './App.css';

function App(props) {
  return (
    <div className='App container'>
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>
              <img src={logo} className='App-logo' alt='logo' />
            </Link>
          </Navbar.Brand>
          <h1>
            Flashnotes
          </h1>
        </Navbar.Header>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
