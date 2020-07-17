import React, { useEffect } from "react";

import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import arrowWood from "../arrowwoodback.jpg";
import {
  CssBaseline,
  Typography,
  Grid,
  Container,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "Lato, sans serif",
    backgroundImage: `url(${arrowWood})`,
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    backgroundColor: "white",
    borderRadius: "10px",
    opacity: "94%",
    fontFamily: "Lato, sans serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  footer: {
    padding: "0",
    marginTop: "0px",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  title: {
    margin: "1.5%",
    display: "flex",
    flexDirection: "row",
    width: "fit-screen",
    flexGrow: 1,
  },
  recipeImg: {
    objectFit: "cover",
    width: "100%",
    height: "auto",
    marginBottom: "15px",
  },
  recipeImgContainer: {
    marginTop: "0",
    display: "flex",
    width: "100%",
    height: "auto",
  },
  hightlights: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  recipeIngredientsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "fit-screen",
    height: "auto",
    marginLeft: "3%",
    paddingBottom: "20px",
  },
  recipeIngredients: {
    marginTop: "1%",
    paddingTop: "1%",
    paddingBottom: "1%",
    direction: "column",
  },
  recipeMainBody: {
    display: "flex",
    flexDirection: "column",
  },
  favoriteStar: {
    float: "right",
    alignContent: "right",
    marginTop: "2%",
  },
}));

export function SingleRecipe(props) {
  const classes = useStyles();
  const recipe = props.location.state || props.appState.singleRecipe;
  const isLoggedIn = !!props.appState.user.id;
  const isSaved =
    props.appState.savedRecipes.filter((saved) => saved.title === recipe.title)
      .length > 0;
  recipe.steps = recipe.steps || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="md">
        {/* Title */}
        <Grid className={classes.title} spacing={2}>
          <Box className={classes.header}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              style={{
                marginLeft: "2%",
                marginTop: "1.5%",
                fontFamily: "Lato, Times, serif",
              }}
            >
              <strong>{recipe.title}</strong>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                style={{
                  marginTop: "20px",
                  fontFamily: "Lato",
                }}
              >
                <span>Servings: {recipe.servings} </span>
              </Typography>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                style={{ fontFamily: "Lato" }}
              >
                <span>Cook Time: {recipe.time} min. </span>
              </Typography>
            </Typography>

            <div className={classes.favoriteStar}>
              {isLoggedIn && !isSaved ? (
                <StarBorderIcon
                  variant="contained"
                  onClick={() => props.saveRecipe(recipe)}
                  style={{
                    alignContent: "right",
                  }}
                />
              ) : null}
              {isLoggedIn && isSaved ? (
                <StarIcon
                  variant="contained"
                  onClick={() => props.removeRecipe(recipe)}
                />
              ) : null}
            </div>
          </Box>
        </Grid>

        <Grid className={classes.recipeImg}>
          <Container className={classes.recipeImgContainer}>
            <img
              className={classes.recipeImg}
              src={recipe.imgUrl}
              alt={recipe.title}
            />
          </Container>
        </Grid>

        <Grid className={classes.recipeIngredientsContainer}>
          <Grid className={classes.recipeIngredients} container>
            <Container style={{ paddingLeft: "0px" }}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                style={{ fontFamily: "Lato" }}
              >
                <strong>Ingredients</strong>
              </Typography>
            </Container>
            <Grid
              container
              spacing={3}
              style={{ marginLeft: "1%", paddingTop: "2%" }}
            >
              {recipe.ingredients.map((ingredient) => (
                <Grid container xs={6} sm={6} key={ingredient} spacing={0}>
                  <Typography
                    variant="h6"
                    component="h2"
                    gutterBottom
                    style={{ fontFamily: "Lato" }}
                  >
                    {ingredient}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* recipe main body */}
        <Container className={classes.recipeMainBody}>
          <Container style={{ paddingLeft: "0px" }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              style={{ fontFamily: "Lato" }}
            >
              <strong>Preparation</strong>
            </Typography>
          </Container>

          {recipe.steps.map((step) => (
            <Grid
              container
              item
              xs={12}
              key={step}
              style={{ width: "fit-screen", marginBottom: "5px" }}
            >
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                style={{ fontFamily: "Lato" }}
              >
                <span>
                  <strong>{`Step ${recipe.steps.indexOf(step) + 1}: `}</strong>
                </span>
                {step}
              </Typography>
            </Grid>
          ))}
        </Container>
      </Container>
    </div>
  );
}

export default withRouter(SingleRecipe);
