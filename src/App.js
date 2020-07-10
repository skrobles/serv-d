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
  }

  async componentDidMount() {
    //getUser if logged in
    const { data } = await axios.get(`${serverUrl}/auth`);
    //{
    // headers: { "Access-Control-Allow-Credentials": true }
    this.setUser(data);
    console.log("AFTER GET", this.state);
    //NOTE: getSavedRecipes if logged in
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
          <Routes setUser={this.setUser} appState={this.state} />
          <BottomAppBar />
        </Box>
      </div>
    );
  }
}

export default withRouter(App);
