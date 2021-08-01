import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";
import AppDispatcher from '../core/dispatcher';
import authStore from '../stores/auth_store';

import { CONFIRM_LOG_IN, LOGIN_BUTTON_ID } from '../constants';
const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

const SignInButton = () => {
  let history = useHistory();

  const _finishLogin = () => {
    if (authStore.isUserNew()) {
      history.push("/onboard");
    } else { 
      // Go somewhere else
    }
  }

  authStore.on(LOGIN_BUTTON_ID, _finishLogin);

  const _onLoginSuccess = (response) => {
    let authToken = response.tokenObj.id_token;
    let email = response.profileObj.email;

    AppDispatcher.dispatch({
      action: CONFIRM_LOG_IN,
      authToken: authToken,
      email: email,
      emitOn: [{
        store: authStore,
        componentIds: [LOGIN_BUTTON_ID]
      }]
    });
  }

  const _onFailure = (response) => {
    console.log(response);
  }

  return (
    <GoogleLogin
      clientId={"646257191612-9s120t0dlousuanlitc75hhc1snacpge.apps.googleusercontent.com"}
      buttonText={"Login with Google"}
      onSuccess={_onLoginSuccess}
      onFailure={_onFailure}
      isSignedIn={false}
      cookiePolicy={'single_host_origin'}
    />
  );
}
export default SignInButton;
