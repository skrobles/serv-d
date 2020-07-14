import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Toolbar,
  CssBaseline,
  AppBar,
  Button,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

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
    background: "#ff0000",
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  title: {
    marginLeft: "35%",
    fontFamily: "sans-serif",
    flexGrow: 1,
    cursor: "pointer",
  },
}));

function BottomAppBar(props) {
  const classes = useStyles();
  const { user, logout } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => props.history.push("/")}
          >
            SERV'D
          </Typography>
          <IconButton edge="end" color="inherit">
            {user.id ? (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  //onClick -> profile
                >
                  <AccountCircle />
                </IconButton>
                <IconButton onClick={() => logout()} color="inherit">
                  <ExitToAppIcon />
                </IconButton>
              </div>
            ) : (
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                href="/login"
              >
                <AccountCircle />
              </IconButton>
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default withRouter(BottomAppBar);
