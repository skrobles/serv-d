import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import Divider from "@material-ui/core/Divider";
import arrowWood from "../arrowwoodback.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "Renner, serif",
    backgroundImage: `url(${arrowWood})`,
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    backgroundColor: "white",
    borderRadius: "10px",
    opacity: "90%",
  },
  footer: {
    padding: "0",
    marginTop: "0px",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  header: {
    alignContent: "center",
    flexDirection: "column",
    width: "fit-screen",
    textAlign: "center",
    margin: "1.5%",
    display: "flex",
    fontFamily: "Plantin, serif",
  },
  recipeImg: {
    objectFit: "cover",
    width: "100%",
    height: "auto",
  },
  recipeImgContainer: {
    marginTop: "0",
    display: "flex",
    width: "65%",
    height: "auto",
  },
  headerInfo: {
    fontFamily: ", serif",
  },
  recipeInfoBelowImgContainer: {
    alignContent: "center",
    flexDirection: "row",
    width: "100%",
    height: "auto",
    textAlign: "center",
    display: "flex",
    marginTop: "0.5%",
  },
  recipeInfoBelowImg: {
    objectFit: "cover",
    width: "100%",
    height: "auto",
    fontFamily: "Renner, serif",
    fontSize: "24px",
  },

  hightlights: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  recipeTitle: {
    fontFamily: "Renner, serif",
    textAlign: "center",
  },
  recipeIngredientsContainer: {
    display: "flex-grow",
    flexDirection: "row",
    width: "fit-screen",
    height: "auto",
    marginLeft: "16%",
    alignContent: "center",
    textAlign: "center",
  },
  recipeIngredients: {
    marginTop: "1%",
    paddingTop: "1%",
    paddingBottom: "1%",
    direction: "column",
    fontFamily: "Renner, serif",
    textAlign: "center",
  },
  recipeMainBody: {
    display: "flex",
    flexDirection: "column",
  },
  directionsHeader: {
    fontFamily: "Renner, serif",
    textAlign: "center",
  },
  favoriteStar: {
    float: "right",
    alignContent: "right",
    // marginTop: "4%",
  },
}));

export function SingleRecipe(props) {
  const classes = useStyles();
  const recipe = props.location.state;
  const isLoggedIn = !!props.appState.user.id;
  const isSaved =
    props.appState.savedRecipes.filter((saved) => saved.title === recipe.title)
      .length > 0;

  recipe.steps = recipe.steps || [];
  console.log(recipe);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="md">
        {/* RECIPE TITLE */}
        <Grid spacing={1}>
          <Typography
            className={classes.header}
            variant="h4"
            component="h1"
            gutterBottom
          >
            <strong>{recipe.title}</strong>
          </Typography>
        </Grid>

        {/* RECIPE IMAGE */}
        <Grid>
          <Container className={classes.recipeImgContainer}>
            <img className={classes.recipeImg} src={recipe.imgUrl} />
          </Container>
        </Grid>

        {/* RECIPE HEADER INFO */}
        <Grid
          className={classes.recipeInfoBelowImgContainer}
          container
          xs={12}
          // sm={6}
        >
          {/* <Container className={classes.blahblahblah}>
          <Typography className={classes.recipeInfoBelowImg} variant="h6" component="h1" gutterBottom>
            <em>Servings: {recipe.servings}</em>
          </Typography>
          <Typography className={classes.recipeInfoBelowImg} variant="h6" component="h1" gutterBottom>
            <em>Cook Time: {recipe.time}</em>
          </Typography>
          </Container> */}
          <Grid item xs={3} />
          <Grid className={classes.recipeInfoBelowImg} item xs={3}>
            <em>Servings: {recipe.servings}</em>
            <br />
            <em>Cook Time: {recipe.time}</em>
          </Grid>

          <Grid className={classes.recipeInfoBelowImg} item xs={3}>
            <em>Save Recipe</em>
            <br />
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
          </Grid>
          <Grid item xs={3} />
        </Grid>

        <Divider />

        {/* RECIPE INGREDIENTS */}
        <Grid container item xs={12}>
          <Container>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              className={classes.directionsHeader}
            >
              <strong>Ingredients</strong>
            </Typography>
          </Container>
          {recipe.ingredients.map((ingredient) => (
            <Grid
              className={classes.recipeIngredientsContainer}
              container
              item
              xs={6}
              sm={4}
              key={ingredient}
              spacing={0}
            >
              <Typography
                className={classes.recipeIngredients}
                variant="h6"
                component="h2"
                gutterBottom
              >
                <em> {ingredient}</em>
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* RECIPE DIRECTIONS */}
        <Container className={classes.recipeMainBody}>
          <Container>
            <Typography
              className={classes.directionsHeader}
              variant="h4"
              component="h2"
              gutterBottom
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
              style={{ width: "fit-screen" }}
            >
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                style={{
                  fontFamily: "Garamond, serif",
                  marginLeft: "2%",
                  marginRight: "2%",
                }}
              >
                <em>
                  <strong>
                    {recipe.steps.indexOf(step) === 0
                      ? `Prep Work: `
                      : `Step ${recipe.steps.indexOf(step)}: `}
                  </strong>
                </em>
                {/* <ol>
                        <li> */}
                {step}
                {/* </li>
                      </ol> */}
              </Typography>
            </Grid>
          ))}
        </Container>
      </Container>

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Serv'd</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default withRouter(SingleRecipe);
