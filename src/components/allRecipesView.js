import React from "react";
import RecipeCard from "./RecipeCard";

export default class AllRecipesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state;
  }

  render() {
    return <RecipeCard />;
  }
}
