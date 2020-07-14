import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import PrintIcon from "@material-ui/icons/Print";
import RateReviewIcon from "@material-ui/icons/RateReview";
import CheckIcon from "@material-ui/icons/Check";
import arrowWood from "../arrowwoodback.jpg";
import {
  CssBaseline,
  Typography,
  Button,
  Grid,
  Link,
  Container,
  Card, 
  CardActions, 
  CardContent, 
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

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
    opacity: "94%",
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
    // marginTop: "4%",
  },
}));

export function SingleRecipe(props) {
  const classes = useStyles();
  const recipe = props.location.state;

  //check if user is logged in and if recipe is already saved
  const isLoggedIn = !!props.appState.user.id;
  const isSaved =
    props.appState.savedRecipes.filter((saved) => saved.title === recipe.title)
      .length > 0;

  recipe.steps = recipe.steps || [];
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="md">
        {/* Title */}
        <Grid className={classes.title} spacing={2}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            style={{
              marginLeft: "2%",
              marginTop: "1.5%",
              fontFamily: "Renner, Times, serif",
            }}
          >
            <strong>{recipe.title}</strong>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              style={{
                fontFamily: "Renner, Times, serif",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <em>Servings: {recipe.servings} </em>
            </Typography>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              style={{
                fontFamily: "Renner, Times, serif",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <em>Cook Time: {recipe.time} min. </em>
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
        </Grid>

        <Grid className={classes.recipeImg}>
          <Container className={classes.recipeImgContainer}>
            <img className={classes.recipeImg} src={recipe.imgUrl} />
          </Container>
        </Grid>

        <Divider style={{ marginTop: "2.5%" }} />

        <Grid className={classes.recipeIngredientsContainer}>
          <Grid className={classes.recipeIngredients} container item xs={6}>
            <Container>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                style={{ fontFamily: "Renner, serif" }}
              >
                <strong>Ingredients</strong>
              </Typography>
            </Container>
            {recipe.ingredients.map((ingredient) => (
              <Grid
                container
                item
                xs={6}
                sm={6}
                key={ingredient}
                style={{ width: "fit-screen" }}
                spacing={0}
              >
                <Typography variant="h6" component="h2" gutterBottom>
                  <em> {ingredient}</em>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Divider />
        {/* recipe main body */}
        <Container className={classes.recipeMainBody}>
          <Container>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              style={{ fontFamily: "Renner, serif" }}
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
                  fontFamily: "Renner, serif",
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
