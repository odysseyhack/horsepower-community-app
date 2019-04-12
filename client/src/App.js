import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import NotFound from './NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
