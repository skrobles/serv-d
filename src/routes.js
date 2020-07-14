import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/home";
import AllRecipesView from "./components/allRecipesView";
import SingleRecipe from "./components/singleRecipe";
import SignUp from "./components/SignUp";
import SavedRecipes from "./components/SavedRecipes";

/**
 * COMPONENT
 */
export class Routes extends Component {
  render() {
    const {
      appState,
      setUser,
      saveRecipe,
      removeRecipe,
      setSearchResults,
      setSingleRecipe,
    } = this.props;
    const isLoggedIn = !!this.props.appState.user.id;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route
          path="/search"
          render={() => (
            <AllRecipesView
              user={appState.user}
              savedRecipes={appState.savedRecipes}
              search={appState.search}
              saveRecipe={saveRecipe}
              removeRecipe={removeRecipe}
              setSearchResults={setSearchResults}
              setSingleRecipe={setSingleRecipe}
            />
          )}
        />
        <Route
          path="/single-recipe"
          render={() => (
            <SingleRecipe
              appState={appState}
              saveRecipe={saveRecipe}
              removeRecipe={removeRecipe}
            />
          )}
        />
        <Route
          path="/login"
          render={() => <Login user={appState.user} setUser={setUser} />}
        />
        <Route
          path="/signup"
          render={() => <SignUp user={appState.user} setUser={setUser} />}
        />
        <Route
          exact
          path="/"
          render={() => <Home setSearchResults={setSearchResults} />}
        />

        {/* <Route exact path="/" component={Home} /> */}
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route
              path="/saved"
              render={() => (
                <SavedRecipes
                  recipes={appState.savedRecipes}
                  setSingleRecipe={setSingleRecipe}
                />
              )}
            />
          </Switch>
        )}
        {/* Displays our Home component as a fallback */}
        <Route component={Home} />
      </Switch>
    );
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes))
export default withRouter(Routes);
