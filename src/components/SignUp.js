import React from "react";
import SignUpForm from "./SignUpForm";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";
import { Box } from "@material-ui/core";

const serverUrl = "/api/auth/signup";

const styles = {
  formContainer: {
    alignContent: "center",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
  },
};

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value, error: null });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    try {
      const { data } = await axios.post(serverUrl, this.state);
      if (data.id) {
        this.props.setUser(data);
        this.props.history.push("/");
      } else {
        this.setState({ error: "Invalid username and/or password" });
      }
    } catch (err) {
      this.setState({ error: err.response.data });
      console.log(err);
    }
  }

  render() {
    return this.props.user.id ? (
      <Redirect to="/" />
    ) : (
      <Box mx="auto" style={styles.formContainer}>
        <SignUpForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          state={this.state}
        />
      </Box>
    );
  }
}

export default withRouter(SignUp);
