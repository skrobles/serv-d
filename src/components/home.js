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
    backgroundPosition: "right"
  }
};

export default class Home extends React.Component {
  render() {
    return (
      <div style={styles.paperContainer}>
        <Box mx="auto">
          <MenuAppBar />
          <div>
            <Box mx="auto" p={1}>
              <Search />
            </Box>
          </div>
          <BottomAppBar />
        </Box>
      </div>
    );
  }
}
