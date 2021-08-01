import React from 'react';
import LandingImage from './landing_image';
import AuthPanel from './auth_panel';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='grid grid-cols-2 w-screen h-screen place-items-center'>
        <LandingImage src='/images/drew_beamer_on_unsplash_friends_cheers.png'/>
        <AuthPanel/>
      </div>
    );
  }
}
