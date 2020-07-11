import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import BottomAppBar from "./components/bottom";
import MenuAppBar from "./components/appBar";
import Box from "@material-ui/core/Box";
import plate from "./foodplate.jpg";
import { withRouter } from "react-router";
import axios from "axios";

const serverUrl = "https://servdapi.herokuapp.com/api";
// const serverUrl = "http://localhost:8080/api";
axios.defaults.withCredentials = true;
// axios.defaults.crossDomain = true;

const styles = {
  paperContainer: {
    height: 756,
    backgroundImage: `url(${plate})`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    zIndex: -1,
  },

  formContainer: {
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 378,
  },
};

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      savedRecipes: [],
    };
    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
  }

  async componentDidMount() {
    //getUser if logged in
    try {
      const { data } = await axios.get(`${serverUrl}/auth`);
      //{
      // headers: { "Access-Control{-Allow-Credentials": true }
      this.setUser(data);
      //getSavedRecipes
      const response = await axios.get(`${serverUrl}/recipes/saved`);
      this.setState({ savedRecipes: response.data });
    } catch (err) {
      console.error(err);
    }
  }

  async saveRecipe(recipe) {
    //save recipe
    console.log("saving recipe", recipe);
    try {
      await axios.post(`${serverUrl}/recipes`, recipe);
      this.setState({ savedRecipes: [...this.state.savedRecipes, recipe] });
    } catch (err) {
      console.error(err);
    }
  }

  removeRecipe(recipe) {
    //remove recipe from saved recipes
    console.log("removing recipe", recipe);
  }

  setUser(user) {
    this.setState({ user });
  }

  async logout() {
    try {
      await axios.post(`${serverUrl}/auth/signout`);
      this.setUser({});
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div style={styles.paperContainer}>
        <Box mx="auto">
          <MenuAppBar appState={this.state} logout={this.logout} />
          <Routes
            setUser={this.setUser}
            saveRecipe={this.saveRecipe}
            removeRecipe={this.removeRecipe}
            appState={this.state}
          />
          <BottomAppBar />
        </Box>
      </div>
    );
  }
}

export default withRouter(App);
