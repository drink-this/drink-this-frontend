import React from 'react';
import SignInButton from './sign_in_button';
import SignUpButton from './sign_up_button';

export default class AuthPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div className='grid grid-cols-1 place-items-center'>
        <div className='text-7xl p-10 text-center'>What should I drink tonight?</div>
        <div className='px-10 pb-5'>Maybe it’s an old classic or maybe it’s something completely brand new. Tell us what you’re into and we’ll suggest something for you.</div>
        <SignUpButton/>
        <SignInButton/>
      </div>
    );
  }
}