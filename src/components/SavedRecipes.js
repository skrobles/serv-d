import React from "react";
import RecipeCard from "./RecipeCard";

const SavedRecipes = (props) => {
  const { recipes } = props;

  return <RecipeCard recipes={recipes} saved="true" />;
};

export default SavedRecipes;
