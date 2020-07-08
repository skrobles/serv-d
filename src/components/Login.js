import React from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
import { withRouter } from "react-router-dom";

// const serverUrl = 'https://cors-anywhere.herokuapp.com/https://servdapi.herokuapp.com/api/auth/signin'
const serverUrl = "https://servdapi.herokuapp.com/api/auth/signin";
// const serverUrl = 'http://localhost:8080/api/auth/signin'

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
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value, error: null });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    try {
      const { data } = await axios.post(serverUrl, this.state);
      console.log(data);
      if (data.id) {
        console.log("in if statement", data);
        this.props.setUser(data);
        this.props.history.push("/");
      } else {
        this.setState({ error: "Invalid username and/or password" });
      }
    } catch (err) {
      this.setState({ error: "Invalid username and/or password" });
      console.log(err);
    }
  }

  render() {
    return (
      <LoginForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        state={this.state}
      />
    );
  }
}

export default withRouter(Login);
