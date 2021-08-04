import React from 'react';
import SignInButton from './sign_in_button';

export default class AuthPanel extends React.Component {
  render () {
    return (
      <div className='grid grid-cols-1 gap-2 place-items-center font-playfair'>
        <div className='text-7xl p-10 text-center text-white'>What should I drink tonight?</div>
        <div className='px-10 pb-5 text-white'>Maybe it’s a classic or maybe it’s something new. Tell us what you’re into and we’ll suggest something for you.</div>
        <SignInButton />
      </div>
    );
  }
}
