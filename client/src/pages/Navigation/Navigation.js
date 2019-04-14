/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  HOME,
  LOGIN,
  SIGNUP,
  CREATE_CAR,
  CREATE_COMMUNITY,
  PREFERENCES,
  DEMO,
} from '../../utils/routes';

import horse from '../../horse.png';

import { AuthContext } from '../../utils/AuthContext';

const NavigationAuth = ({ history }) => {
  const { toggleIsAuthenticated } = useContext(AuthContext);

  async function handleLogout() {
    await Auth.signOut();
    toggleIsAuthenticated(false);
  }

  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to={PREFERENCES}>
          Preferences
        </Nav.Link>
        <Nav.Link as={Link} to={DEMO}>
          Charging Demo
        </Nav.Link>
        <NavDropdown title="Create" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to={CREATE_COMMUNITY}>
            Community
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to={CREATE_CAR}>
            Car
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );
};

const NavigationNonAuth = () => (
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link as={Link} to={SIGNUP}>
        Sign up
      </Nav.Link>
      <Nav.Link as={Link} to={LOGIN}>
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
);

const Navigation = ({ history }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to={HOME}>
        <img
          alt=""
          src={horse}
          width="30"
          height="35"
          className="d-inline-block align-top"
        />
        {'  '}
        HorsePower Community
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {isAuthenticated ? (
        <NavigationAuth history={history} />
      ) : (
        <NavigationNonAuth />
      )}
    </Navbar>
  );
};

export default Navigation;
