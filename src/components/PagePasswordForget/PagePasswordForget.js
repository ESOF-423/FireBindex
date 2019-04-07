import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === "";

    const { classes } = this.props;

    return (
      <form classname={classes.container} onSubmit={this.onSubmit}>
        <TextField
          classname={classes.textField}
          margin="normal"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          label="Email Address"
          fullWidth
        />
        <br />
        <Button
          disabled={isInvalid}
          type="submit"
          size="large"
          color="primary"
          variant="contained"
        >
          Reset My Password
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link style={{ textDecoration: "none" }} to={ROUTES.PASSWORD_FORGET}>
      <Button size="large" color="secondary" variant="contained">
        Forgot Password?
      </Button>
    </Link>
  </p>
);

PasswordForgetFormBase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default PasswordForgetPage;

const PasswordForgetForm = withStyles(styles)(
  withFirebase(PasswordForgetFormBase)
);

export { PasswordForgetForm, PasswordForgetLink };
