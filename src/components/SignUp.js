import React, { useState, useEffect } from "react";
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

export function SignUp(props) {
  const [user, updateUser] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const { data } = await axios.post(serverUrl, user);
      if (data.id) {
        props.setUser(data);
        props.history.push("/");
      } else {
        setError("Invalid username and/or password");
      }
    } catch (err) {
      setError(err.response.data);
    }
  }

  return props.user.id ? (
    <Redirect to="/" />
  ) : (
    <Box mx="auto" style={styles.formContainer}>
      <SignUpForm
        onChange={(evt) => {
          updateUser({ ...user, [evt.target.name]: evt.target.value });
          setError(null);
        }}
        onSubmit={handleSubmit}
        user={user}
        error={error}
      />
    </Box>
  );
}

export default withRouter(SignUp);
