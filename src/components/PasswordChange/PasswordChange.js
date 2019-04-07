import React, { Component } from "react";

import { withFirebase } from "../Firebase";
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

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    const { classes } = this.props;

    return (
      <form classname={classes.container} onSubmit={this.onSubmit}>
        <TextField
          classname={classes.textField}
          margin="normal"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          label="New Password"
          fullWidth
        />
        <TextField
          classname={classes.textField}
          margin="normal"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          label="Confirm New Password"
          fullWidth
        />
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

PasswordChangeForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(PasswordChangeForm));
