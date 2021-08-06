import React, { ProvideAuth, PrivateRoute } from "./auth_provider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Landing from './landing.js';
import Onboard from './onboard.js';
import SearchResults from './search_results.js';
import YelpSearch from './yelp_search.js';
import ShowPage from './show_page.js';
import authStore from '../stores/auth_store.js';
import Dashboard from './dashboard.js';
import { AFTER_LOGIN, AFTER_LOGOUT } from '../constants.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null
    };
  }

  _afterLogout = () => {
    this.setState({
      redirect: null
    });
  }
  
  componentDidMount() {
    authStore.on(AFTER_LOGIN, this._afterLogin); 
    authStore.on(AFTER_LOGOUT, this._afterLogout);
  }

  render() {
    return (
      <ProvideAuth>
        <Router>
          <div>
            <Switch>
              <Route path="/">
                <Landing />
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/onboard">
                <Onboard />
              </PrivateRoute>
              <PrivateRoute path="/search/yelp">
                <YelpSearch />
              </PrivateRoute>
              <PrivateRoute path="/search">
                <SearchResults />
              </PrivateRoute>
              <PrivateRoute path="/recommendation">
                <ShowPage />
              </PrivateRoute>
              <PrivateRoute path="/search">
                <SearchResults />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </ProvideAuth>
    );
  }
}

// const authWithGoogle = {
//   isAuthenticated: false,
//   signin(cb) {
//     // do the google thing?
//   },
//   signout(cb) {
//     // sign out of the google
//   }
// };


// function AuthButton() {
//   let history = useHistory();
//   let auth = useAuth();

//   return auth.user ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();
//   let auth = useAuth();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     auth.signin(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }
