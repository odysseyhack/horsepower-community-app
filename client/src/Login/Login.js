import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';

import { AuthContext } from '../utils/AuthContext';
import { HOME } from '../utils/routes';
import './Login.css';

// eslint-disable-next-line react/prop-types
const Login = ({ history }) => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');

  const { toggleIsAuthenticated } = useContext(AuthContext);

  function handleEmailChange(e) {
    updateEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    updatePassword(e.target.value);
  }

  function handleLogin(e) {
    e.preventDefault();
    console.log(email, password);
    toggleIsAuthenticated(true);
    history.push(HOME);
  }

  return (
    <div className="login">
      <Form className="login-form" onSubmit={handleLogin}>
        <h3>Login</h3>
        <Form.Group controlId="loginFormEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@example.com"
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group controlId="loginFormPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="••••••••••••••••••"
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};
export default Login;
