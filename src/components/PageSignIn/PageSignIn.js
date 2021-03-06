//import react component
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
//import firebase
import { withFirebase } from "../Firebase";
import { withStyles } from "@material-ui/core/styles";
//import constants from ROUTES
import * as ROUTES from "../../constants/routes";
import PropTypes from "prop-types";
import { PasswordForgetLink } from "../PagePasswordForget/PagePasswordForget";
//import material ui
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = style => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: style.spacing.unit,
    marginRight: style.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const SignInPage = () => (
  <div>
    <Grid container justify="center">
      <Grid item xs={12} sm={8} md={6} lg={6}>
        <div align="center">
          <Card>
            <CardHeader
              title="Admin Sign In"
              subheader="Sign in with your username and password"
            />
            <CardContent>
              <SignInForm />
              <PasswordForgetLink />              
            </CardContent>
          </Card>
        </div>
      </Grid>
    </Grid>
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  //set state to email & password
  onSubmit = event => {
    const { email, password } = this.state;

    //sign in to firebase with email and password
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        //push user to HOME page url
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    //check if password and email arent empty
    const isInvalid = password === "" || email === "";

    const { classes } = this.props;

    return (
      <form classname={classes.container} onSubmit={this.onSubmit}>
        <TextField
          classname={classes.textField}
          margin="normal"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          label="Email Address"
          fullWidth
        />
        <br />
        <TextField
          classname={classes.textField}
          margin="normal"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          label="Password"
          fullWidth
        />
        <br />
        <Button
          type="submit"
          disabled={isInvalid}
          size="large"
          color="primary"
          variant="contained"
        >
          Sign In
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(withStyles(styles)(SignInFormBase));

SignInPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SignInPage;

export { SignInForm };
