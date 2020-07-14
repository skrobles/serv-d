import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./App.css";
import { Box, Hidden } from "@material-ui/core";
import Routes from "./routes";
import BottomAppBar from "./components/bottom";
import MenuAppBar from "./components/appBar";
import plate from "./foodplate.jpg";
import arrowWood from "./arrowwoodback.jpg";
import seamlessWood from "./seamlessWood.png";
import seamlessWood2 from "./seamlessWood2.jpg";
import seamlessWood3 from "./seamlessWood3.jpg";

const serverUrl = "https://servdapi.herokuapp.com/api";
// const serverUrl = "http://localhost:8080/api";
axios.defaults.withCredentials = true;
// axios.defaults.crossDomain = true;

const styles = {
  paperContainer: {
    height: 950,
    backgroundImage: `url(${seamlessWood2})`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: "repeat",
    zIndex: -1,
  },

  formContainer: {
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 450,
  },
};

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      savedRecipes: [],
      search: [],
    };
    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
    this.setSearchResults = this.setSearchResults.bind(this);
  }

  async componentDidMount() {
    //getUser if logged in
    try {
      const { data } = await axios.get(`${serverUrl}/auth`);
      //{
      // headers: { "Access-Control{-Allow-Credentials": true }
      this.setUser(data);
      //getSavedRecipes
      if (this.state.user.id) {
        // const response = await axios.get(`${serverUrl}/recipes/saved`);
        // this.setState({ savedRecipes: response.data });
        this.getRecipes();
      }
    } catch (err) {
      console.error(err.response.data);
    }
  }

  async saveRecipe(recipe) {
    try {
      await axios.post(`${serverUrl}/recipes`, recipe);
      this.setState({ savedRecipes: [...this.state.savedRecipes, recipe] });
    } catch (err) {
      console.error(err.response.data);
    }
  }

  async removeRecipe(recipe) {
    try {
      await axios.delete(`${serverUrl}/recipes/${recipe.title}`);
      const updatedRecipes = this.state.savedRecipes.filter(
        ({ title }) => title !== recipe.title
      );
      this.setState({ savedRecipes: updatedRecipes });
    } catch (err) {
      console.error(err.response.data);
    }
  }

  async getRecipes() {
    try {
      const response = await axios.get(`${serverUrl}/recipes/saved`);
      this.setState({ savedRecipes: response.data });
    } catch (err) {
      console.error(err.response.data);
    }
  }

  async setUser(user) {
    this.setState({ user });
    if (user.id) {
      await this.getRecipes();
    }
  }

  async logout() {
    try {
      await axios.post(`${serverUrl}/auth/signout`);
      this.setUser({});
      this.setState({ savedRecipes: [] });
      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  setSearchResults(recipes) {
    this.setState({ search: recipes });
  }

  render() {
    return (
      <div style={styles.paperContainer}>
        <Box mx="auto">
          <Hidden smDown>
            <MenuAppBar user={this.state.user} logout={this.logout} />
          </Hidden>
          <Routes
            setUser={this.setUser}
            saveRecipe={this.saveRecipe}
            removeRecipe={this.removeRecipe}
            setSearchResults={this.setSearchResults}
            appState={this.state}
          />
          <Hidden mdUp>
            <BottomAppBar user={this.state.user} logout={this.logout} />
          </Hidden>
        </Box>
      </div>
    );
  }
}

export default withRouter(App);
