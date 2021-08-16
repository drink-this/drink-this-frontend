import React, { useContext, useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';
import AppDispatcher from '../core/dispatcher';

import { LOGOUT, AFTER_LOGOUT } from '../constants';
import googleAuthStore from '../stores/google_auth_store';
import { authContext } from './auth_provider';
import { useHistory } from 'react-router-dom';

export default function SignOutButton () {
  let auth = useContext(authContext);
  let history = useHistory();

  const _onLogoutSuccess = () => {
    AppDispatcher.dispatch({
      action: LOGOUT,
      emitOn: [{
        store: googleAuthStore,
        ids: [AFTER_LOGOUT]
      }]
    });
  }

  const _afterLogoutAction = () => {
    auth.setUserAuthedState(googleAuthStore.isAuthed(), () => {
      history.push('/');
    });
  }

  googleAuthStore.on(AFTER_LOGOUT, _afterLogoutAction);

  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_CLIENT_ID}
      onLogoutSuccess={_onLogoutSuccess}
      render={
        (renderProps) => {return <button onClick={renderProps.onClick} className="font-playfair font-bold hover:underline mx-16">Logout</button>}
      }
    />
  );
}
