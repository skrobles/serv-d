import React from "react";
import BottomAppBar from "./bottom";
import MenuAppBar from "./appBar";
import Box from "@material-ui/core/Box";
import Search from "./search";
import plate from "../foodplate.jpg";

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
    // alignSelf: 'center',
    // justifySelf: 'center',
  },
};

export default class Home extends React.Component {
  render() {
    return (
      <div style={styles.paperContainer}>
        <Box mx="auto">
          <MenuAppBar />
          <Box mx="auto" style={styles.formContainer}>
            <Search />
          </Box>
          <BottomAppBar />
        </Box>
      </div>
    );
  }
}
