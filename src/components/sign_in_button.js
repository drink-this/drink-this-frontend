import React from 'react';
import GoogleLogin from 'react-google-login';

export default class SignInButton extends React.Component {

  responseGoogle = (response) => {
    console.log(response);// This is what is given to us by google
  }

  render () {
    return <GoogleLogin
    clientId="646257191612-9s120t0dlousuanlitc75hhc1snacpge.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />;
  }
}
