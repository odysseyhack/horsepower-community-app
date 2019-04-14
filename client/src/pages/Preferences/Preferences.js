import React from 'react';
import { Jumbotron, Button, Col, Container, Row } from 'react-bootstrap';

import withAuthentication from '../../utils/withAuthentication';

const PreferencesConnect = () => (
  <Jumbotron>
    <h1>Preferences</h1>
    <p>
      Please connect your car to our service if you want to personalize your
      preferences. You need to have Metamask installed for this.
    </p>
    <p>
      <Button variant="primary">Connect</Button>
    </p>
  </Jumbotron>
);

const PreferencesList = () => (
  <Container>
    <Row>
      <h3>Override: </h3>
    </Row>
    <Row>
      <Col>
        <h5>Charge now!</h5>
        <h6>Warning: this action may lead to higher energy consumption</h6>
      </Col>
      <Col>
        <Button variant="danger">Charge</Button>
      </Col>
    </Row>
  </Container>
);

const Preferences = () => (
  <>
    <PreferencesConnect />
    <PreferencesList />
  </>
);

export default withAuthentication(Preferences);
