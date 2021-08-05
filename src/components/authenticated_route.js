import React from "react";
import { Route, Redirect } from "react-router-dom";
import authStore from '../stores/auth_store.js';
import Header from './header.js';
import Landing from './landing.js';

export default class AuthenticatedRoute extends React.Component {
  render() {
    if (authStore.isAuthed()) {
      return (
        <div>
          <Header />
          <Route path={this.props.path} component={this.props.component} />
        </div>
      );
    } else {
      console.log('going to landing');
      return <Route to='/' component={Landing} />;
    }
  }
}
