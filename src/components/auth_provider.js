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

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  const updateChildrenWithProps = (props) => {
    return React.Children.map(
      children,
      (child, i) => {
        return React.cloneElement(child, {...props});
      }
    );
  };
  return (
    <div>
      <Header/>
      <Route
        {...rest}
        render={(props) =>
          auth.userAuthed() ? (
            updateChildrenWithProps(props)
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