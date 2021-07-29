import React from 'react';

export default class SignUpButton extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return <a className='border-2 border-black max-w-md' href='#'>Sign up with Google</a>;
  }
}
