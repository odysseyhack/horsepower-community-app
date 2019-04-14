import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Signup.css';

const Signup = () => (
  <div className="signup">
    <Form className="signup-form">
      <h3>Sign up</h3>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="email@example.com" />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="••••••••••••••••••" />
      </Form.Group>
      <Form.Group controlId="formPasswordConfirm">
        <Form.Label>Confirm password:</Form.Label>
        <Form.Control type="password" placeholder="••••••••••••••••••" />
      </Form.Group>
      <Button type="submit">Sign up</Button>
    </Form>
  </div>
);
export default Signup;
