import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CreateIcon from '@material-ui/icons/Create';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export function AllRecipesRender(props) {
  const classes = useStyles();
  const { recipes, savedRecipes, saveRecipe, removeRecipe } = props;
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
        <Container className={classes.cardGrid} maxWidth="md">
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
