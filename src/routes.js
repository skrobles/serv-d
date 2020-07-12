import React, { Component } from "react";
// import {connect} from 'react-redux'

import { withRouter, Route, Switch } from "react-router-dom";
// import {me} from './store'
import axios from "axios";
import Login from "./components/Login";
import Home from "./components/home";
import AllRecipesView from "./components/allRecipesView";
import SingleRecipe from "./components/singleRecipe";
import SignUp from "./components/SignUp";
import ViewAccountForm from "./components/ViewAccountForm";
import Account from "./components/Account"

const serverUrl = "https://servdapi.herokuapp.com/api/auth";
// const serverUrl = "http://localhost:8080/api/auth";
axios.defaults.withCredentials = true;
// axios.defaults.crossDomain = true;

/**
 * COMPONENT
 */
export class Routes extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      savedRecipes: [],
    };
    this.setUser = this.setUser.bind(this);
  }

  async componentDidMount() {
    // this.props.loadInitialData()
    //NOTE: getUser if logged in
    const { data } = await axios.get(serverUrl);
    //{
    // headers: { "Access-Control-Allow-Credentials": true }
    this.setUser(data);
    console.log("comp did mountAFTER GET", this.state);
    //NOTE: getSavedRecipes if logged in
  }

  setUser(user) {
    this.setState({ user });
  }

  render() {
    const isLoggedIn = !!this.state.user.id;
    console.log('route render >>>>>>', this.setUser)
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/recipes" component={AllRecipesView} />
        <Route exact path="/single-recipe" component={SingleRecipe} />
        <Route
          path="/login"
          render={(setUser) => <Login setUser={this.setUser} />}
        />
        <Route
          path="/signup"
          render={(setUser) => <SignUp setUser={this.setUser} />}
        />
        <Route exact path="/" component={Home} />
        {/* <Route path="/signup" component={Signup} /> */}
        {isLoggedIn && (
          <Switch>
            <Route
              path="/myAccount"
              render={(setUser) =>
                <Account
                  user={this.state.user}
                  setUser={this.setUser}
                />
              }
            />
            {/* Routes placed here are only available after logging in */}
            {/* <Route path="/home" component={UserHome} /> */}
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Home} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
// Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
// Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes))
export default withRouter(Routes);

/**
 * PROP TYPES
 */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
