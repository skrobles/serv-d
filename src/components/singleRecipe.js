import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

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
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    backgroundColor: "white",
    borderRadius: "10px",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  title: {
    alignSelf: "center",
    textAlign: "center",
  },
  hightlights: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="md">
        <Container className={classes.title}>
          <Typography variant="h2" component="h1" gutterBottom>
            {recipe.title}
          </Typography>

          <img src={recipe.imgUrl} width="50%" />
        </Container>
        <Grid className={classes.highlights} container spacing={1}>
          {isLoggedIn && !isSaved ? (
            <Grid container item xs={12}>
              <Button
                variant="contained"
                onClick={() => props.saveRecipe(recipe)}
                color="primary"
              >
                Save Recipe
              </Button>
            </Grid>
          ) : null}
          {isLoggedIn && isSaved ? (
            <Grid container item xs={12}>
              <Button
                variant="contained"
                onClick={() => props.removeRecipe(recipe)}
                color="primary"
              >
                Remove Recipe
              </Button>
            </Grid>
          ) : null}
          <Grid container item xs={6}>
            <Typography variant="h6" component="h2" gutterBottom>
              <strong>Yield:</strong> {recipe.servings}
            </Typography>
          </Grid>

          <Grid container spacing={1}>
            <Grid container item xs={12}>
              <Typography variant="h6" component="h2" gutterBottom>
                <strong>Ingredients:</strong>
              </Typography>
              {recipe.ingredients.map((ingredient) => (
                <Grid container item xs={12} key={ingredient}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {ingredient}
                  </Typography>
                </Grid>
              ))}
              {recipe.steps.map((step) => (
                <Grid container item xs={12} key={step}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {step}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* <Container>
          <Typography variant="h5" component="h2" gutterBottom>
            {"Description of single recipe"}
            {"Serving sizxe, time takes to make, ingredients, maybe user rating?"}
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom>
            1. Recipe instructions
            <br />
            2. Recipe instructions
            <br />
            3. Recipe instructions
          </Typography>
        </Container>
      </Container> */}

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
