import React, { useState } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import './Demo.css';

/**
 * 1) Docking
 * 2) Checking if car is allowed to charge
 * 2.1) Car allowed: charging
 * 2.1.1) Receive VATT tokens
 * 2.2) Car not allowed: not charging
 * 2.3) Car needed for discharge
 * 2.3.1) Send VATT tokens to the contract
 *
 *
 * 3) Undocking
 * 4) Calculating how much free energy you got?
 */

const CHARGING_STATES = ['charging', 'discharging', 'idle'];

const Demo = () => {
  const [chargingIndex, updateChargingIndex] = useState(3);
  const [isDocked, toggleDocked] = useState(false);
  const [messageToDisplay, changeMessage] = useState('No car in the garage');

  function handleCharge() {
    changeMessage('Collecting information...');
    const nextChargingIndex = chargingIndex < 3 ? chargingIndex + 1 : 0;
    setTimeout(() => {
      toggleDocked(true);
      switch (nextChargingIndex) {
        case 0:
          changeMessage('Receiving VATT tokens from smart contract...');
          break;
        case 1:
          changeMessage('Sending VATT tokens to smart contract...');
          break;
        case 2:
          changeMessage('No interaction with smart contract');
          break;
        default:
          break;
      }
      updateChargingIndex(nextChargingIndex);
    }, 2000);
  }

  function handleDischarge() {
    changeMessage('Car disconnecected');
    toggleDocked(false);
  }

  let variant = '';
  if (isDocked) {
    switch (chargingIndex) {
      case 0:
        variant = 'success';
        break;
      case 1:
        variant = 'warning';
        break;
      case 2:
        variant = 'secondary';
        break;
      default:
        variant = 'primary';
    }
  } else {
    variant = 'primary';
  }

  return (
    <div className="demo">
      <Jumbotron>
        <h1>Charging</h1>
        <p>
          Visualisation of a car coming into the garage and docking to the power
          station.
        </p>
      </Jumbotron>
      <div className="demo-info">
        <h2>Car:</h2>
        <p>{isDocked ? CHARGING_STATES[chargingIndex] : 'disconnected'}</p>
      </div>
      <div className="demo-info">
        <h2>Information:</h2>
        <p>{messageToDisplay}</p>
      </div>
      <div className="demo-buttons">
        <Button
          className="demo-button"
          variant={variant}
          onClick={handleCharge}
        >
          Dock
        </Button>
        <Button
          className="demo-button"
          variant="danger"
          onClick={handleDischarge}
        >
          Undock
        </Button>
      </div>
    </div>
  );
};

export default Demo;
