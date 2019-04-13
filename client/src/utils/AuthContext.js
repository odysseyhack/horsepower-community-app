import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

export const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // const [authUser, updateAuthUser] = useState();
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);
  const [isAuthenticating, toggleIsAuthenticating] = useState(true);

  useEffect(() => {
    async function fetchSession() {
      try {
        await Auth.currentSession();
        toggleIsAuthenticated(true);
      } catch (e) {
        if (e !== 'No current user') {
          console.error(e);
          toggleIsAuthenticated(false);
        }
      }
      toggleIsAuthenticating(false);
    }
    fetchSession();
  });
  return (
    <AuthContext.Provider
      value={{
        // authUser,
        // updateAuthUser,
        isAuthenticated,
        isAuthenticating,
        toggleIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
