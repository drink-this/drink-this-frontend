import React from 'react';

export default class SignInButton extends React.Component {
  constructor(props) {
    super(props);
  }

  _checkForToken = () => {
    let token = localStorage.getItem('drink_this_user_id')

    if (token === null) {
      // do what sign up button does
    } else {
      // handle it as whatever
    }
  }

  render () {
    return <a className='border-2 border-black max-w-md' href='https://drink-this-backend.herokuapp.com/' onClick={this._checkForToken}>Sign In</a>;
  }
}