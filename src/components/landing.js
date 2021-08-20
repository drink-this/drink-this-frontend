import React from 'react';
import { useHistory } from 'react-router-dom';
import googleAuthStore from '../stores/google_auth_store';
import AuthPanel from './auth_panel';
import { useAuth } from './auth_provider';
import WhiteLogo from './white_logo';
import AgeVerificationModal from './age_verification_modal.js';

export default function Landing (props) {
  let history = useHistory();
  let auth = useAuth();

  if (!auth.userAuthed()) {
    return (
      <div className='bg-landing bg-cover h-screen'>
        <div className="flex">
          <WhiteLogo />
        </div>
        <div className='grid grid-cols-11 place-items-center'>
          <div className='col-span-7 '></div>
          <div className='col-span-4'>
            <AuthPanel/>
          </div>
        </div>
        <AgeVerificationModal/>
      </div>
    );
  } else {
    let userIsAuthed = googleAuthStore.isAuthed();

    auth.setUserAuthedState(userIsAuthed, () => {
      if (googleAuthStore.isUserNew() == true) {
        history.replace('/onboard');
      } else {
        history.replace('/dashboard');
      }
    });
    return null;
  }
}
