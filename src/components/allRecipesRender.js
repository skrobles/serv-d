import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Redirect, withRouter } from "react-router-dom";
import RecipeCard from "./RecipeCard";
// import Link from "@material-ui/core/Link";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Serv'd
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  button: {
    justifyContent: "space-between",
  },
  save: {
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
}));

export function AllRecipeRender(props) {
  const classes = useStyles();
  const recipes = props.recipes;
  const user = props.user || {};
  const savedRecipes = props.savedRecipes;

  // console.log("render", props)

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CreateIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Recipes found based on your search
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {recipes.map((card) => {
              const isSaved =
                savedRecipes.filter(({ title }) => title === card.title)
                  .length > 0;
              return (
                <RecipeCard
                  card={card}
                  key={card.title}
                  isSaved={isSaved}
                  user={user}
                />
              );
            })}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default withRouter(AllRecipeRender);
