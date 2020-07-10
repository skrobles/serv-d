import React from "react";
import SignUpForm from "./SignUpForm";
import axios from "axios";
import { withRouter } from "react-router-dom";

// const serverUrl = 'https://cors-anywhere.herokuapp.com/https://servdapi.herokuapp.com/api/auth/signin'
const serverUrl = "https://servdapi.herokuapp.com/api/auth/signup";
// const serverUrl = "http://localhost:8080/api/auth/signup";

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
      this.setState({ error: "Invalid username and/or password" });
      console.log(err);
    }
  }

  render() {
    return (
      <SignUpForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        state={this.state}
      />
    );
  }
}

export default withRouter(SignUp);
