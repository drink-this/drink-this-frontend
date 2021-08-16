import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ProvideAuth, PrivateRoute } from './auth_provider';
import Landing from './landing.js';
import Onboard from './onboard.js';
import SearchResults from './search_results.js';
import YelpSearch from './yelp_search.js';
import ShowPage from './show_page.js';
import Dashboard from './dashboard.js';

export default function App () {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <PrivateRoute path="/onboard" component={Onboard}/>
          <PrivateRoute path="/search/yelp" component={YelpSearch}/>
          <PrivateRoute path="/search" component={SearchResults} />
          <PrivateRoute path="/recommendation" component={ShowPage}/>
          <PrivateRoute path="/cocktails/:id" component={ShowPage}/>
          <PrivateRoute path="/search" component={SearchResults} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}
