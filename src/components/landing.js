import React from 'react';
import AuthPanel from './auth_panel';
import WhiteLogo from './white_logo';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='bg-hero-pattern bg-cover w-screen h-screen'>
        <div className="flex">
          <WhiteLogo />
        </div>
        <div className='grid grid-cols-11  place-items-center'>
          <div className='col-span-7 '></div>
          <div className='col-span-4'>
           <AuthPanel/>
          </div>
        </div>
      </div>
    );
  }
}
