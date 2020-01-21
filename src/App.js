import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Link, withRouter } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Routes from './Routes';
import logo from './cards.svg';
import './App.css';

function App(props) {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    props.history.push('/login'); /* redirect UX to Login */
  }
  return (
    !isAuthenticating && /* wait on user login */
    <div className='App container'>
      <Navbar fluid collapseOnSelect>
        <Navbar.Header className='v-align-children'>
          <Navbar.Brand>
            <Link to='/'>
              <img src={logo} className='App-logo' alt='logo' />
            </Link>
          </Navbar.Brand>
          <span className='app-title-navbar'>
            Trump Data
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
                <NavItem><span alt='golf-emoji'>⛳️</span>&nbsp;Golfing</NavItem>
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
/* using higher order component to grab router props */
export default withRouter(App);
