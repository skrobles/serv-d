/* eslint-disable no-alert */
import React from "react";
import ViewAccountForm from "./ViewAccountForm";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Button, Box, Hidden } from "@material-ui/core";

const serverUrl = "/api/auth";

const styles = {
  button: {
    marginTop: "30px",
    backgroundColor: "#ec2d01",
    borderRadius: "5px",
  },
  formContainer: {
    alignContent: "center",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
  },
};

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
        alert("Update Successful");
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Box mx="auto" style={styles.formContainer}>
        <ViewAccountForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          state={this.state}
        />
        <Hidden mdUp>
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={() => this.props.logout()}
          >
            Logout
          </Button>
        </Hidden>
      </Box>
    );
  }
}

export default withRouter(Account);
