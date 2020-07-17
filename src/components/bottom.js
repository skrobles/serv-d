import React from "react";
import { AccountCircle } from "@material-ui/icons";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {
  Typography,
  IconButton,
  Toolbar,
  CssBaseline,
  AppBar,
  Fab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
    background: "#ec2d01",
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -10,
    left: 0,
    right: 0,
    margin: "0 auto",
    background: "#42603c",
    "&:hover": {
      background: "#42603c",
    },
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
    fontFamily: "Oswald, sans-serif",
    fontSize: "20px",
    color: "white",
  },
}));

function BottomAppBar(props) {
  const classes = useStyles();
  const { user } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => props.history.goBack()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Link to="/">
            <Fab className={classes.fabButton}>
              <Typography variant="h6" className={classes.title}>
                SERV'D
              </Typography>
            </Fab>
          </Link>
          <div className={classes.grow} />
          {user.id ? (
            <div>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => props.history.push("/saved")}
              >
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                color="inherit"
                onClick={() => props.history.push("/myAccount")}
              >
                <AccountCircle />
              </IconButton>
            </div>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => props.history.push("/login")}
            >
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default withRouter(BottomAppBar);
