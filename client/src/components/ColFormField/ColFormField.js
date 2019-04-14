import React from 'react';
import { Form, Col } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const ColFormField = ({ colProps, controlId, children, ...props }) => (
  <Col {...colProps}>
    <Form.Group controlId={controlId}>
      <Form.Label>{children}</Form.Label>
      <Form.Control {...props} />
    </Form.Group>
  </Col>
);

export default ColFormField;
