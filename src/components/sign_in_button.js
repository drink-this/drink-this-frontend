import React from 'react';
import { GoogleLogin } from 'react-google-login';
import AppDispatcher from '../core/dispatcher';

import { CONFIRM_LOG_IN, AFTER_LOGIN } from '../constants';
import authStore from '../stores/auth_store';
// const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

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
