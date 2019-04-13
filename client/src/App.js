import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Preferences from './Preferences';
import NotFound from './NotFound';
import { AuthProvider } from './utils/AuthContext';
import {
  HOME,
  PREFERENCES,
  LOGIN,
  CREATE_COMMUNITY,
} from './utils/routes';
import './App.css';
import CreateCommunity from './Create/CreateCommunity/CreateCommunity';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route path={HOME} exact component={Home} />
          <Route path={LOGIN} exact component={Login} />
          <Route path={SIGNUP} exact component={Signup} />
          <Route path={PREFERENCES} exact component={Preferences} />
          <Route path={CREATE_COMMUNITY} exact component={CreateCommunity} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
