import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
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
  const isSaved = props.isSaved || false;
  const user = props.user || {};
  const card = props.recipe;

  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} md={4}>
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
            {user.id && isSaved ? (
              <Button className={classes.save}>
                <StarIcon />
              </Button>
            ) : user.id ? (
              <Button className={classes.save}>
                <StarBorderIcon />
              </Button>
            ) : null}
          </CardActions>
        </Card>
      </Grid>
      ))
    </React.Fragment>
  );
}

export default withRouter(RecipeCard);
