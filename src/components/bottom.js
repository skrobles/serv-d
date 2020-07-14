import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {
  Typography,
  IconButton,
  Toolbar,
  CssBaseline,
  AppBar,
  Fab,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

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
    top: 'auto',
    bottom: 0,
    background: '#ec2d01',
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -10,
    left: 0,
    right: 0,
    margin: '0 auto',
    background: '#42603c',
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
    fontFamily: 'Miriam Libre, sans-serif',
    fontSize: '30px',
    color: 'white',
  },
}));

function BottomAppBar(props) {
  const classes = useStyles();
  const { user, logout } = props;

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
          {user.id && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => props.history.push('/saved')}
            >
              <FavoriteBorderIcon />
            </IconButton>
          )}
          <Fab className={classes.fabButton}>
            <Typography
              variant="h6"
              className={classes.title}
              onClick={() => props.history.push('/')}
            >
              SERV'D
            </Typography>
          </Fab>
          <div className={classes.grow} />
          {user.id ? (
            <div>
              <IconButton
                edge="end"
                aria-label="account of current user"
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
            <IconButton edge="end" color="inherit" href="/login">
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default withRouter(BottomAppBar);
