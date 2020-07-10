import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/home";
import AllRecipesView from "./components/allRecipesView";
import SingleRecipe from "./components/singleRecipe";
import SignUp from "./components/SignUp";
import axios from "axios";

/**
 * COMPONENT
 */
export class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn } = !!this.props.appState.user.id;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/recipes" component={AllRecipesView} />
        <Route exact path="/single-recipe" component={SingleRecipe} />
        <Route
          path="/login"
          render={(setUser) => <Login setUser={this.props.setUser} />}
        />
        <Route
          path="/signup"
          render={(setUser) => <SignUp setUser={this.props.setUser} />}
        />
        <Route exact path="/" component={Home} />
        {isLoggedIn && (
          <Switch>
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
