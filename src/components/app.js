import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Landing from './landing.js';
import AuthenticatedRoute from "./authenticated_route";
import UnauthenticatedRoute from './unauthenticated_route';
import Onboard from './onboard.js';
import SearchResults from './search_results.js';
import YelpSearch from './yelp_search.js';
import ShowPage from './show_page.js';
import authStore from '../stores/auth_store.js';
import { AFTER_LOGIN } from '../constants.js';
import Dashboard from './dashboard.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null
    };
  }

  _afterLogin = () => {
    if (authStore.isUserNew() === 'true') {
      this.setState({
        redirect: '/onboard'
      });
    } else {
      this.setState({
        redirect: '/dashboard'
      });
    }
  }

  _renderRedirect = () => {
    if (this.state.redirect !== null) {
      let url = this.state.redirect;
      this.state = { redirect: null };
      return <Redirect to={url} />;
    } else {
      return '';
    }
  }
  
  componentDidMount() {
    authStore.on(AFTER_LOGIN, this._afterLogin); 
  }

  render() {
    return (
      <Router>
        <Switch>
          <AuthenticatedRoute
            path='/dashboard'
            component={Dashboard}
          />
          <AuthenticatedRoute
            path="/onboard"
            component={Onboard}
          />
          <AuthenticatedRoute
            path="/search/yelp"
            component={YelpSearch}
            />
          <AuthenticatedRoute
            path="/search"
            component={SearchResults}
            />
          <AuthenticatedRoute
            path="/recommendation"
            component={ShowPage}
            />
          <AuthenticatedRoute
            path="/cocktails/:id"
            component={ShowPage}
            />
          {this._renderRedirect()}
          <UnauthenticatedRoute
            path='/'
            component={Landing}
          />
        </Switch>
      </Router>
    );
  }
}
