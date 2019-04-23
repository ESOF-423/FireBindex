//import react, component
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
//import firebase
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import Button from "@material-ui/core/Button";
//import constants from ROUTES for page URLs
import * as ROUTES from "../../constants/routes";
// import @material-ui components
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";


const styles = ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
})

//contain signUpForm in page
const SignUpPage = () => (
  <Grid container justify="center">
    <Card>
      <CardHeader
        title="Create Admin"
        subheader="Create new admins with full system access"
      />
      <CardContent>    
        <SignUpForm />
      </CardContent>
    </Card>
  </Grid>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  //onSubmit, set state to new user info
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    //push new user info to firebase users, and db user table
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    //check if input info is within our specified parameters
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    const { classes } = this.props;

    return (
      <form classname={classes.container} onSubmit={this.onSubmit}>        
          <TextField
            classname={classes.textfield}
            margin="normal"
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            label="Full Name"
          />        
          <TextField
            classname={classes.textfield}
            margin="normal"
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            label="Email Address"
          />
          <TextField
            classname={classes.textfield}
            margin="normal"
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            label="Password"
          />
          <TextField
            classname={classes.textfield}
            margin="normal"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            label="Confirm Password"
          />
          <Button 
            diabled={isInvalid} 
            type="submit"
            size="large"
            color="secondary"
            variant="contained">
            Sign Up
          </Button>        
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase
)(withStyles(styles)(SignUpFormBase));

SignUpFormBase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (SignUpPage);

export { SignUpForm };
