import React from 'react';
import {
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Container,
  Row,
} from 'react-bootstrap';

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
      <h3>Work schedule</h3>
    </Row>
    <Form>
      <FormGroup>
        <div className="mb-3">
          <Form.Check
            custom
            type="checkbox"
            id="preference-1"
            label="Prefer charging in the morning"
          />
          <Form.Check
            custom
            type="checkbox"
            id="preference-2"
            label="Always charge to max during the night"
          />
        </div>
      </FormGroup>
    </Form>
  </Container>
);

const Preferences = () => (
  <>
    <PreferencesConnect />
    <PreferencesList />
  </>
);

export default withAuthentication(Preferences);
