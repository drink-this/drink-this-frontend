import { GoogleLogin } from 'react-google-login';
import AppDispatcher from '../core/dispatcher';

import { CONFIRM_LOG_IN, AFTER_LOGIN } from '../constants';
import googleAuthStore from '../stores/google_auth_store';
import { useHistory } from 'react-router-dom';
import { useAuth } from './auth_provider';
import { useEffect } from 'react';
import spinnerStore from '../stores/spinner_store';

export default function GoogleSignIn() {
  let auth = useAuth();
  let history = useHistory();

  const _onLoginSuccess = (response) => {
    let authToken = response.tokenId;
    spinnerStore.setLoadingSpinnerAsActive();

    AppDispatcher.dispatch({
      action: CONFIRM_LOG_IN,
      authToken: authToken,
      emitOn: [{
        store: googleAuthStore,
        ids: [AFTER_LOGIN]
      }]
    });
  }

  const _afterLoginAction = () => {
    let userIsAuthed = googleAuthStore.isAuthed();

    auth.setUserAuthedState(userIsAuthed, () => {
      if (googleAuthStore.isUserNew() === 'true') {
        history.replace('/onboard');
      } else {
        history.replace('/dashboard');
      }
    });
  }

  const _onFailure = (response) => {
    console.log(response);
  }

  useEffect(() => {
    googleAuthStore.on(AFTER_LOGIN, _afterLoginAction);
    return function cleanup() {
      googleAuthStore.removeListener(AFTER_LOGIN, _afterLoginAction);
    };
  });
  
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
