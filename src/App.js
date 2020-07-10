import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import BottomAppBar from "./components/bottom";
import MenuAppBar from "./components/appBar";
import Box from "@material-ui/core/Box";
import Search from "./components/search";
import plate from "./foodplate.jpg";
import { Redirect, withRouter } from "react-router";

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
  render() {
    return (
      <div style={styles.paperContainer}>
        <Box mx="auto">
          <MenuAppBar />
          <Routes />
          <BottomAppBar />
        </Box>
      </div>
    );
  }
}

export default withRouter(App);
