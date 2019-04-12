import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  HOME,
  LOGIN,
  REGISTER,
  LOGOUT,
  CREATE_CAR,
  CREATE_COMMUNITY,
} from '../utils/routes';

const NavigationNonAuth = () => (
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to={REGISTER}>
        Preferences
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
      <Nav.Link as={Link} to={LOGOUT}>
        Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
);

const NavigationAuth = () => (
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link as={Link} to={REGISTER}>
        Register
      </Nav.Link>
      <Nav.Link as={Link} to={LOGIN}>
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
);

const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to={HOME}>
      HorsePower Community
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    {true ? <NavigationAuth /> : <NavigationNonAuth />}
  </Navbar>
);

export default Navigation;
