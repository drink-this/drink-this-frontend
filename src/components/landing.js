import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthPanel from './auth_panel';
import { useAuth } from './auth_provider';
import WhiteLogo from './white_logo';
import ageConfirmStore from '../stores/age_confirm_store'
import Modal from './modal.js';
import authMall from '../stores/auth_mall';

export default function Landing (props) {
  let history = useHistory();
  let auth = useAuth();
  let [userConfirmed, setUserConfirmed] = useState(ageConfirmStore.isUserOfAge());

  const userConfirm = () => {
    ageConfirmStore.setUserOfAge('over21')
    setUserConfirmed(true);
  }

  const underAge = () => {
    window.open("https://www.cdc.gov/alcohol/fact-sheets/underage-drinking.htm");
  }

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
        <Modal
        yes={userConfirm}
        no={underAge}
        cname={userConfirmed ? 'hidden' : 'block'}
        />
      </div>
    );
  } else {
    let userIsAuthed = authMall.currentAuthService.isAuthed();

    auth.setUserAuthedState(userIsAuthed, () => {
      if (authMall.isUserNew() == true) {
        history.replace('/onboard');
      } else {
        history.replace('/dashboard');
      }
    });
    return null;
  }
}
