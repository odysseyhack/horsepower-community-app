import React, { useState } from 'react';

export const AuthContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // const [authUser, updateAuthUser] = useState();
  const [isAuthenticated, toggleIsAuthenticated] = useState();
  return (
    <AuthContext.Provider
      value={{
        // authUser,
        // updateAuthUser,
        isAuthenticated,
        toggleIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
