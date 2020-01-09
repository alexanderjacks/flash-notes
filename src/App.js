import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Routes from './Routes';
import logo from './cards.svg';
import './App.css';

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  function handleLogout() {
    userHasAuthenticated(false);
  }
  return (
    <div className='App container'>
      <Navbar fluid collapseOnSelect>
        <Navbar.Header className='v-align-children'>
          <Navbar.Brand>
            <Link to='/'>
              <img src={logo} className='App-logo' alt='logo' />
            </Link>
          </Navbar.Brand>
          <span className='app-title-navbar'>
            Flashnotes
          </span>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          {isAuthenticated
            ? <NavItem onClick={handleLogout}>Logout</NavItem>
            : <>
              <LinkContainer to='/signup'>
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to='/login'>
                <NavItem>Login</NavItem>
              </LinkContainer>
              </>
          }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }}/>
    </div>
  );
}

export default App;
