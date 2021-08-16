import React, { useContext, createContext, useState } from "react";
import {
  Route,
  Redirect
} from "react-router-dom";
import googleAuthStore from "../stores/google_auth_store";
import Header from "./header";

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
  // On any hard refresh this gets nuked. Using the store right now until a new solution is made
  const [userState, setUserState] = useState(googleAuthStore.isAuthed());

  const setUserAuthedState = (isUserAuthed, callback) => {
    setUserState(isUserAuthed);
    if (isUserAuthed) {
      callback();
    }
  };

  const userAuthed = () => {
    console.log('checking authed state: ' + userState);
    return userState === null ? false : userState;
  }

  return {
    setUserAuthedState,
    userAuthed,
  };
}

function useAuth() {
  return useContext(authContext);
}

function PrivateRoute(props) {
  let auth = useAuth();
  return (
    <div>
      <Header/>
      <Route
        {...props}
        render={(props) =>
          auth.userAuthed() ? (
            <component {...props}/>
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    </div>
  );
}

export { PrivateRoute, ProvideAuth, useAuth }