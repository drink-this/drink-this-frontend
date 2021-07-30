import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";
import AppDispatcher from '../core/dispatcher';
import AuthStore from '../stores/auth_store';
const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

import { CONFIRM_LOG_IN, LOGIN_BUTTON_ID } from '../constants';

const SignInButton = () => {
  let history = useHistory();

  const _finishLogin = () => {
    history.push("/onboard");
  }

  AuthStore.on(LOGIN_BUTTON_ID, _finishLogin);

  const _onLoginSuccess = (response) => {
    console.log(response);
    let authToken = response.tokenObj.id_token;

    AppDispatcher.dispatch({
      action: CONFIRM_LOG_IN,
      authToken: authToken,
      emitOn: [{
        store: AuthStore,
        componentIds: [LOGIN_BUTTON_ID]
      }]
    });
  }

  const _onFailure = (response) => {
    console.log(response);
  }

  return (
    <GoogleLogin
      clientId={REACT_APP_GOOGLE_CLIENT_ID}
      buttonText={"Login with Google"}
      onSuccess={_onLoginSuccess}
      onFailure={_onFailure}
      isSignedIn={false}
      cookiePolicy={'single_host_origin'}
    />
  );
}
export default SignInButton;
