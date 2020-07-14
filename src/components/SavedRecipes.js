import React from "react";
import RecipeCard from "./RecipeCard";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import arrowWood from "../arrowwoodback.jpg";
import seamlessWood from "../seamlessWood.png";
import seamlessWood2 from "../seamlessWood2.jpg";
import seamlessWood3 from "../seamlessWood3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundImage: `url(${seamlessWood})`,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const SavedRecipes = (props) => {
  const classes = useStyles();
  const { recipes } = props;

  return (
    <div className={classes.root}>
      <React.Fragment>
        <main>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {recipes.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.title} />
              ))}
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    </div>
  );
};

export default SavedRecipes;
