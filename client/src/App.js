import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './pages/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Preferences from './pages/Preferences';
import NotFound from './pages/NotFound';
import { AuthProvider } from './utils/AuthContext';
import {
  HOME,
  PREFERENCES,
  LOGIN,
  SIGNUP,
  CREATE_COMMUNITY,
} from './utils/routes';
import './App.css';
import CreateCommunity from './pages/Create/CreateCommunity/CreateCommunity';

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
