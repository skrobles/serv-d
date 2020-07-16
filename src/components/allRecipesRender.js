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
  },
  text: {
    textAlign: "center",
    noWrap: "true",
    color: "white",
    fontWeight: "70px",
    fontFamily: "Oswald, sans-serif",
    marginBottom: "30px",
    marginTop: "10px",
  },
}));

export function AllRecipesRender(props) {
  const classes = useStyles();
  const {
    recipes,
    savedRecipes,
    saveRecipe,
    removeRecipe,
    setSingleRecipe,
    ingredient,
  } = props;
  const user = props.user || {};

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {recipes.length ? (
            <Box className={classes.results}>
              <Typography variant="h3" color="inherit" className={classes.text}>
                RECIPES
              </Typography>
            </Box>
          ) : (
            <Box className={classes.results}>
              <Typography variant="h3" color="inherit" className={classes.text}>
                NO RECIPES MATCH YOUR SEARCH
              </Typography>
            </Box>
          )}
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
                  setSingleRecipe={setSingleRecipe}
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
