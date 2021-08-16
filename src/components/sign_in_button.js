import { GoogleLogin } from 'react-google-login';
import AppDispatcher from '../core/dispatcher';

import { CONFIRM_LOG_IN, AFTER_LOGIN } from '../constants';
import googleAuthStore from '../stores/google_auth_store';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from './auth_provider';

export default function SignInButton() {

  let auth = useContext(authContext);
  let history = useHistory();

  const _onLoginSuccess = (response) => {
    let authToken = response.tokenId;

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
      if (googleAuthStore.isUserNew()) {
        history.push('/onboard');
      } else {
        history.push('/dashboard');
      }
    });
  }

  const _onFailure = (response) => {
    console.log(response);
  }

  googleAuthStore.on(AFTER_LOGIN, _afterLoginAction);

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
