import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  results: {
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    opacity: "60%",
  },
}));

export function AllRecipesRender(props) {
  const classes = useStyles();
  const { recipes, savedRecipes, saveRecipe, removeRecipe } = props;
  const user = props.user || {};

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Box className={classes.results}>
            <Typography
              variant="h6"
              color="inherit"
              style={{ fontFamily: "Renner, serif", noWrap: "true" }}
            >
              Recipes found based on your search:
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {recipes.map((card) => {
              const isSaved =
                savedRecipes.filter(({ title }) => title === card.title)
                  .length > 0;
              return (
                <RecipeCard
                  recipe={card}
                  key={card.title}
                  isSaved={isSaved}
                  user={user}
                  saveRecipe={saveRecipe}
                  removeRecipe={removeRecipe}
                />
              );
            })}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default withRouter(AllRecipesRender);
