import React from 'react';
import { GoogleLogin } from 'react-google-login';
import AppDispatcher from '../core/dispatcher';

import { CONFIRM_LOG_IN, AFTER_LOGIN } from '../constants';
import authStore from '../stores/auth_store';

const SignInButton = () => {
  const _onLoginSuccess = (response) => {
    let authToken = response.tokenId;

    AppDispatcher.dispatch({
      action: CONFIRM_LOG_IN,
      authToken: authToken,
      emitOn: [{
        store: authStore,
        ids: [AFTER_LOGIN]
      }]
    });
  }

  const _onFailure = (response) => {
    console.log(response);
  }

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENT_ID}
      buttonText={"Login with Google"}
      onSuccess={_onLoginSuccess}
      onFailure={_onFailure}
      isSignedIn={false}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default SignInButton;
