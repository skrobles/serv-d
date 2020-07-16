import React from "react";
import ViewAccountForm from "./ViewAccountForm";
import axios from "axios";
import { withRouter } from "react-router-dom";

// const serverUrl =
// "https://cors-anywhere.herokuapp.com/https://servdapi.herokuapp.com/api/auth";
// const serverUrl = 'https://servdapi.herokuapp.com/api/auth';
// const serverUrl = 'http://localhost:8080/api/auth';
const serverUrl = "/api/auth";

export class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.appState.user);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    try {
      if (this.state.id !== null) {
        const { data } = await axios.put(`${serverUrl}`, this.state);
        this.props.setUser(data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <ViewAccountForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        state={this.state}
        // user={}
      />
    );
  }
}

export default withRouter(Account);
