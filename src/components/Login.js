import React from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { Box } from "@material-ui/core";

const serverUrl = "/api/auth";

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

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value, error: null });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    try {
      const { data } = await axios.post(`${serverUrl}/signin`, this.state);
      if (data.id) {
        this.props.setUser(data);
        this.props.history.push(this.props.history.location.state);
      } else {
        this.setState({ error: "Invalid username and/or password" });
      }
    } catch (err) {
      this.setState({ error: "Invalid username and/or password" });
      console.log(err);
    }
  }

  async loginWithGoogle(response) {
    const idToken = response.getAuthResponse().id_token;
    try {
      const { data } = await axios.post(`${serverUrl}/google`, {
        token: idToken,
      });
      this.props.setUser(data);
      this.props.history.push(this.props.history.location.state);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return this.props.user.id ? (
      <Redirect to={this.props.history.location.state} />
    ) : (
      <Box mx="auto" style={styles.formContainer}>
        <LoginForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          state={this.state}
          loginWithGoogle={this.loginWithGoogle}
        />
      </Box>
    );
  }
}

export default withRouter(Login);
