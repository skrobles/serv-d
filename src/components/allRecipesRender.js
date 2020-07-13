import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CreateIcon from "@material-ui/icons/Create";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
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
              noWrap
              style={{ "font-family": "Renner, serif" }}
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
