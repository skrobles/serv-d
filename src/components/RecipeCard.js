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

export function RecipeCard(props) {
  const classes = useStyles();
  const recipes = props.recipes;
  const saved = props.saved || null;
  const user = props.user || {};

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
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {recipes.map((card) => (
              <Grid item key={card.sourceUrl} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imgUrl}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.button}>
                    <Button
                      size="small"
                      color="primary"
                      className={classes.view}
                      onClick={() =>
                        props.history.push({
                          pathname: "/single-recipe",
                          state: card,
                        })
                      }
                    >
                      View
                    </Button>
                    {/* <Button size="small" color="primary">
                        Save
                    </Button> */}
                    {/* {user.id && !saved ?
                    <Button className={classes.save}>
                      <StarBorderIcon />
                    </Button>
                    :
                    null } */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default withRouter(RecipeCard);
