/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Form, Container, Row, Col, Button, InputGroup } from 'react-bootstrap';

import withAuthentication from '../../utils/withAuthentication';
import './CreateCommunity.css';

const CreateCommunity = () => {
  const [community, updateCommunity] = useState({});
  const [building, updateBuilding] = useState({});
  const [powerlines, updatePowerlines] = useState([]);

  const handleAddPowerline = () => {
    updatePowerlines([...powerlines, {}]);
  };

  const handleChange = event => {
    const newCommunity = { ...community };
    newCommunity[event.target.name] = event.target.value;
    updateCommunity(newCommunity);
  };

  const handleChangeBuilding = event => {
    const newBuilding = { ...building };
    newBuilding[event.target.name] = event.target.value;
    updateBuilding(newBuilding);

    const newCommunity = { ...community };
    newCommunity.building = newBuilding;
    updateCommunity(newCommunity);
  };

  const handleCreate = event => {
    event.preventDefault();
    console.log(community);
  };

  // const handleUpdatePowerline = event => i => {
  //   const newCommpunities = [communities];
  //   newCommpunities[i];
  // };

  const powerline = i => (
    <Row key={i}>
      <Col md={6}>
        <Form.Group controlId="community-powerline-provider">
          <Form.Label>Provider</Form.Label>
          <Form.Control type="text" placeholder="Vattenfall" name="Provider" />
        </Form.Group>
      </Col>
      <Col md={3}>
        <Form.Group controlId="community-powerline-id">
          <Form.Label>Line ID</Form.Label>
          <Form.Control type="text" placeholder="Line1" name="ID" />
        </Form.Group>
      </Col>
      <Col md={3}>
        <label htmlFor={`kilowatt-input-${i}`}>Capacity</label>
        <InputGroup>
          <Form.Control
            placeholder="Capacity"
            aria-label="Capacity"
            aria-describedby="PowerlineCapacity"
            type="number"
            id={`kilowatt-input-${i}`}
            name="Capacity"
          />
          <InputGroup.Append>
            <InputGroup.Text id="kilowatt-hours">kWh</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    </Row>
  );
  return (
    <div className="create-community">
      <Container>
        <Row>
          <h1>Create a new community</h1>
        </Row>
        <Row>
          <Col>
            <Form className="create-community-form" onSubmit={handleCreate}>
              <Container>
                <div className="mb-5">
                  <h4>Contact person information</h4>
                  <Row>
                    <Col>
                      <Form.Group controlId="community-contact-name">
                        <Form.Label>Contact Name:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Mike Shepherd"
                          name="contactName"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="community-contact-phone">
                        <Form.Label>Contact Phone</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="+42 1234 12345"
                          name="contactPhone"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="community-contact-email">
                        <Form.Label>Contact Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="mike.shepherd@riverside.community"
                          name="contactEmail"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
                <div className="mb-5">
                  <h4>Community information</h4>
                  <Row>
                    <Col md={5}>
                      <Form.Group controlId="community-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Riverside"
                          name="name"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={5}>
                      <Form.Group controlId="community-description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="The red house near the river."
                          name="description"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={2}>
                      <Form.Group controlId="community-power-num-apts">
                        <Form.Label>№ Apartments</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="25"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="community-address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="83 Main Str."
                          name="address"
                          onChange={handleChangeBuilding}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="community-address2">
                        <Form.Label>Address 2 (Optional)</Form.Label>
                        <Form.Control type="text" placeholder="83 Main Str." />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={5}>
                      <Form.Group controlId="community-country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" placeholder="Germany" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="community-state">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Berlin"
                          name="city"
                          onChange={handleChangeBuilding}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group controlId="community-zip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" placeholder="12053" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        variant="outline-secondary"
                        onClick={handleAddPowerline}
                      >
                        + Add a powerline
                      </Button>
                    </Col>
                  </Row>
                </div>
                <div className="mb-5">
                  {powerlines.length ? <h4>Available powerlines</h4> : null}
                  {powerlines.map((value, index) => powerline(index))}
                </div>
                <Row>
                  <Col>
                    <Button variant="primary" type="submit" block>
                      Create
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withAuthentication(CreateCommunity);
