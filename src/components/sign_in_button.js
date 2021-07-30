import React from 'react';
import GoogleLogin from 'react-google-login';

export default class SignInButton extends React.Component {

  responseGoogle = (response) => {
    console.log(response);// This is what is given to us by google
  }

  render () {
    return <GoogleLogin
    clientId=""
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />;
  }
}
