import React from "react";
import Box from "@material-ui/core/Box";
import Search from "./search";
import plate from "../foodplate.jpg";
import { Redirect, withRouter } from "react-router-dom";

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

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredient: "",
      isSubmitted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  }
  render() {
    if (this.state.isSubmitted) {
      return (
        <Redirect
          to={{
            pathname: `/search`,
            state: this.state,
          }}
        />
      );
    } else
      return (
        <Box mx="auto" style={styles.formContainer}>
          <Search
            ingredient={this.state.ingredient}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </Box>
      );
  }
}

export default withRouter(Home);
