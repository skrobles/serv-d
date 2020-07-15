import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import AllRecipesRender from "./allRecipesRender";

const serverUrl = "https://servdapi.herokuapp.com/api/recipes";
// const serverUrl = "http://localhost:8080/api/recipes";

export class AllRecipesView extends React.Component {
  async componentDidMount() {
    if (this.props.location.state) {
      const ingredient = this.props.location.state.ingredient;
      const { data } = await axios.get(serverUrl, {
        params: {
          ingredients: ingredient,
        },
        withCredentials: false,
      });
      this.props.setSearchResults(data);
    }
    this.props.setSingleRecipe({});
  }

  render() {
    const { ingredient } = this.props.location.state;
    return (
      <AllRecipesRender
        recipes={this.props.search}
        user={this.props.user}
        savedRecipes={this.props.savedRecipes}
        saveRecipe={this.props.saveRecipe}
        removeRecipe={this.props.removeRecipe}
        setSingleRecipe={this.props.setSingleRecipe}
        ingredient={ingredient}
      />
    );
  }
}

export default withRouter(AllRecipesView);
