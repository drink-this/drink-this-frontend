import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './landing.js';
import AuthenticatedRoute from "./authenticated_route";
import Onboard from './onboard.js';
import SearchResults from './search_results.js';
import YelpSearch from './yelp_search.js';
import ShowPage from './show_page.js';
import authStore from '../stores/auth_store.js';
import { AFTER_LOGIN } from '../constants.js';

export default class App extends React.Component {

  _afterLogin = () => {
    if (authStore.isUserNew()) {
      window.location = '/onboard';
    } else {
      window.location = '/dashboard';
    }
  }

  componentDidMount() {
    authStore.on(AFTER_LOGIN, this._afterLogin); 
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
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
        </Switch>
      </Router>
    );
  }
}
