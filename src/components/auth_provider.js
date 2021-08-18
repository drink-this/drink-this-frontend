import React, { useContext, createContext, useState } from "react";
import {
  Route,
  Redirect
} from "react-router-dom";
import authMall from "../stores/auth_mall";
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
  const [userState, setUserState] = useState(authMall.currentAuthService?.isAuthed());

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

export { PrivateRoute, ProvideAuth, useAuth, useProvideAuth }
