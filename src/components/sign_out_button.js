import React from 'react';
import { GoogleLogout } from 'react-google-login';
import AppDispatcher from '../core/dispatcher';

import { LOGOUT, AFTER_LOGOUT } from '../constants';
import authStore from '../stores/auth_store';

const SignOutButton = () => {

  const _onLogoutSuccess = () => {
    AppDispatcher.dispatch({
      action: LOGOUT,
      emitOn: [{
        store: authStore,
        ids: [AFTER_LOGOUT]
      }]
    });
  }

  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_CLIENT_ID}
      buttonText={"Logout"}
      onLogoutSuccess={_onLogoutSuccess}
      tag={'a'}
      type={'none'}
      icon={false}
      className={'font-playfair font-bold hover:underline mx-16'}
    />
  );
}

export default SignOutButton;
