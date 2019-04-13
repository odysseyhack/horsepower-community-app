import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthContext } from './AuthContext';
import { LOGIN } from './routes';

const withAuthentication = Component => props => {
  const { isAuthenticated, isAuthenticating } = useContext(AuthContext);
  return (
    !isAuthenticating &&
    (isAuthenticated ? <Component {...props} /> : <Redirect to={LOGIN} />)
  );
};

export default withAuthentication;
