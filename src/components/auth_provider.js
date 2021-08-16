import React, { useContext, createContext, useState } from "react";
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

function useProvideAuth() {
  const [userState, setUserState] = useState(null);

  const setUserAuthedState = (isUserAuthed, callback) => {
    if (isUserAuthed) {
      callback();
    }
    setUserState(isUserAuthed);
  };

  const userAuthed = () => {
    console.log('checking authed state');
    return userState === null ? false : userState;
  }

  return {
    setUserAuthedState,
    userAuthed,
  };
}

function PrivateRoute({ children, ...rest }) {
  let auth = useContext(authContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.userAuthed ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export { PrivateRoute, ProvideAuth, authContext }