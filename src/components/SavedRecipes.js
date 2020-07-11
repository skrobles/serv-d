import React from "react";
import RecipeCard from "./RecipeCard";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const SavedRecipes = (props) => {
  const classes = useStyles();
  const { recipes } = props;

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {recipes.map((recipe) => (
              <RecipeCard recipe={recipe} />
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default SavedRecipes;
