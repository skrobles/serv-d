import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function ViewAccountForm(props) {
  const classes = useStyles();
  console.log('account form', props)
  const { className, ...rest } = props;
  const {onChange, onSubmit} = props
  const { name, email } = props.user

  // if(props.user.name) {
  //   const { name } = props.user
  // } else {
  //   const name = ""
  // }
  // console.log("this is viewaccount props!!>>>>", props);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form
        autoComplete="off"
        noValidate
        onSubmit={(evt) => onSubmit(evt)}
        >
        <CardHeader subheader="The information can be edited" title="My Account" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify your name"
                label="Name"
                margin="dense"
                name="name"
                onChange={(evt) => onChange(evt)}
                required
                value={name ? name : ''}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={(evt) => onChange(evt)}
                required
                value={email}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
