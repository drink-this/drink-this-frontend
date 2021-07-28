import React from 'react';

export default class AuthPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div className='grid grid-cols-1'>
        <div className='text-7xl p-10'>What should I drink tonight?</div>
        <div className='px-10 pb-5'>Maybe it’s an old classic or maybe it’s something completely brand new. Tell us what you’re into and we’ll suggest something for you.</div>
        <button className='border-2 border-black max-w-md'>Sign up with Google</button>
        <button className='border-2 border-black max-w-md'>Sign In</button>
      </div>
    );
  }
}