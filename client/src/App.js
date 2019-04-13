import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Preferences from './Preferences';
import NotFound from './NotFound';
import { HOME, PREFERENCES } from './utils/routes';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path={HOME} exact component={Home} />
        <Route path={PREFERENCES} exact component={Preferences} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
