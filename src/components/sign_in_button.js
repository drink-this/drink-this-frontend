import React from 'react';
import {Link} from 'react-router-dom';

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
    return <Link className='border-2 border-black max-w-md' to={{ pathname: "http://localhost:8080/auth/google_oauth2" }} target="_blank" onClick={this._checkForToken}>Sign In</Link>;
  }
}
