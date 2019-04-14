/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { Form, Container, Row, Col, Button, InputGroup } from 'react-bootstrap';

import ColFormField from '../../../components/ColFormField';
import withAuthentication from '../../../utils/withAuthentication';
import { createCommunity, getCommunities } from '../../../api';
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

  const handleChangeChangePowerline = i => event => {
    const newPowerlines = [...powerlines];
    newPowerlines[i][event.target.name] = event.target.value;
    updatePowerlines(newPowerlines);

    const newCommunity = { ...community };
    newCommunity.powerlines = newPowerlines;
    updateCommunity(newCommunity);
  };

  const handleCreate = event => {
    event.preventDefault();
    console.log(community);
    try {
      createCommunity(community);
    } catch (e) {
      console.log(e);
    } finally {
      getCommunities();
    }
  };

  const powerline = i => (
    <Row key={i}>
      <ColFormField
        colProps={{ md: 6 }}
        controlId="community-powerline-provider"
        type="text"
        placeholder="Vattenfall"
        name="provider"
        onChange={handleChangeChangePowerline(i)}
      >
        Provider
      </ColFormField>

      <ColFormField
        colProps={{ md: 3 }}
        controlId="community-powerline-id"
        type="text"
        placeholder="Line1"
        name="ID"
        onChange={handleChangeChangePowerline(i)}
      >
        Line ID
      </ColFormField>
      <Col md={3}>
        <label htmlFor={`kilowatt-input-${i}`}>Capacity</label>
        <InputGroup>
          <Form.Control
            placeholder="Capacity"
            aria-label="Capacity"
            aria-describedby="PowerlineCapacity"
            type="number"
            id={`kilowatt-input-${i}`}
            name="capacity"
            onChange={handleChangeChangePowerline(i)}
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
                    <ColFormField
                      controlId="community-contact-name"
                      type="text"
                      placeholder="Mike Shepherd"
                      name="contactName"
                      onChange={handleChange}
                    >
                      Contact Name
                    </ColFormField>
                  </Row>
                  <Row>
                    <ColFormField
                      colProps={{ md: 6 }}
                      controlId="community-contact-phone"
                      type="text"
                      placeholder="+42 1234 12345"
                      name="contactPhone"
                      onChange={handleChange}
                    >
                      Contact Phone
                    </ColFormField>
                    <ColFormField
                      colProps={{ md: 6 }}
                      controlId="community-contact-email"
                      type="email"
                      placeholder="mike.shepherd@riverside.community"
                      name="contactEmail"
                      onChange={handleChange}
                    >
                      Contact Email
                    </ColFormField>
                  </Row>
                </div>
                <div className="mb-5">
                  <h4>Community information</h4>
                  <Row>
                    <ColFormField
                      colProps={{ md: 5 }}
                      controlId="community-name"
                      type="text"
                      placeholder="Riverside"
                      name="name"
                      onChange={handleChange}
                    >
                      Name
                    </ColFormField>
                    <ColFormField
                      colProps={{ md: 5 }}
                      controlId="community-description"
                      type="text"
                      placeholder="The red house near the river."
                      name="description"
                      onChange={handleChange}
                    >
                      Description
                    </ColFormField>
                    <ColFormField
                      colProps={{ md: 2 }}
                      controlId="community-power-num-apts"
                      type="number"
                      placeholder="25"
                      name="numberOfApartments"
                      onChange={handleChangeBuilding}
                    >
                      № Apartments
                    </ColFormField>
                  </Row>
                  <Row>
                    <ColFormField
                      colProps={{ md: 6 }}
                      controlId="community-address"
                      type="text"
                      placeholder="83 Main Str."
                      name="address"
                      onChange={handleChangeBuilding}
                    >
                      Address
                    </ColFormField>
                    <ColFormField
                      colProps={{ md: 6 }}
                      controlId="community-address2"
                      type="text"
                      placeholder="building number: 12, apt: 11"
                    >
                      Address 2
                    </ColFormField>
                  </Row>
                  <Row>
                    <ColFormField
                      colProps={{ md: 5 }}
                      controlId="community-country"
                      type="text"
                      placeholder="Germany"
                    >
                      Country
                    </ColFormField>
                    <ColFormField
                      colProps={{ md: 4 }}
                      controlId="community-state"
                      type="text"
                      placeholder="Berlin"
                      name="city"
                      onChange={handleChangeBuilding}
                    >
                      City
                    </ColFormField>
                    <ColFormField
                      colProps={{ md: 3 }}
                      controlId="community-zip"
                      type="text"
                      placeholder="12053"
                    >
                      Zip
                    </ColFormField>
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
