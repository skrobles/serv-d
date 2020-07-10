import axios from "axios";
import React from "react";
import RecipeCard from "./RecipeCard";
import { withRouter } from "react-router-dom";

export class AllRecipesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: this.props.location.state.ingredient,
      recipes: [],
    };
  }

  async componentDidMount() {
    const ingredient = this.state.ingredient;
    const { data } = await axios.get(
      "https://servdapi.herokuapp.com/api/recipes",
      {
        params: {
          ingredients: ingredient,
        },
        withCredentials: false,
      }
    );
    this.setState({ recipes: data });
  }

  render() {
    return <RecipeCard recipes={this.state.recipes} user={this.props.user} />;
  }
}

export default withRouter(AllRecipesView);
