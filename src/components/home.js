import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import Search from "./search";
import plate from "../foodplate.jpg";
import arrowWood from "../arrowwoodback.jpg";
import { Redirect, withRouter } from "react-router-dom";

const styles = {
  paperContainer: {
    minHeight: "100vh",
    margin: "0px",
    flexDirection: "column",
    height: "fill-screen",
    backgroundImage: `url(${arrowWood})`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: "repeat",
    zIndex: -1,
  },
  formContainer: {
    alignContent: "center",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
  },
  title: {
    color: "white",
    fontWeight: "70px",
    fontFamily: "Oswald, sans-serif",
    fontSize: "50px",
    paddingBottom: "40px",
    marginTop: "100px",
  },
  button: {
    marginTop: "30px",
    backgroundColor: "#ec2d01",
    borderRadius: "5px",
  },
};

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: "",
      isSubmitted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.setSearchResults([]);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
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
          <Typography
            color="inherit"
            align="center"
            variant="h2"
            marked="center"
            style={styles.title}
          >
            SEARCH FOR RECIPES
          </Typography>
          <Search
            ingredient={this.state.ingredient}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.handleSubmit}
            disabled={!this.state.ingredient}
          >
            Serve!
          </Button>
        </Box>
      );
  }
}

export default withRouter(Home);
