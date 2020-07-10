import React from "react";
import RecipeCard from "./RecipeCard";

const SavedRecipes = (props) => {
  const { recipes } = props;
  console.log(recipes);
  return <RecipeCard recipes={recipes} />;
};

export default SavedRecipes;
