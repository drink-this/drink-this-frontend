import React, { useContext, createContext } from "react";
import {
  Route,
  Redirect
} from "react-router-dom";

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const signin = cb => {
    
  };

  const signout = cb => {
    
  };

  return {
    signin,
    signout
  };
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default { PrivateRoute, ProvideAuth, useAuth, useProvideAuth }