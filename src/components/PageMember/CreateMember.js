import React, { Component } from "react";
import { withFirebase } from "../Firebase";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
  firstName: "",
  middleName: "",
  lastName: "",
  birthday: "",
  phoneNumber: "",
  email: "",
  streetAddress: "",
  city: "",
  state: "",
  zip: "",
  apartmentNumber: "",
  meals: 2,
  emergencyFirstName: "",
  emergencyLastName: "",
  emergencyPhoneNumber: "",
  emergencyRelationship: ""
};

class CreateMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    this.props.firebase.members().push(this.state);
  };

  render() {
    const {
      firstName,
      middleName,
      lastName,
      birthday,
      phoneNumber,
      email,
      streetAddress,
      city,
      state,
      zip,
      apartmentNumber,
      meals,
      emergencyFirstName,
      emergencyLastName,
      emergencyPhoneNumber,
      emergencyRelationship
    } = this.state;

    const isInvalid =
      firstName === "" ||
      lastName === "" ||
      birthday === "" ||
      phoneNumber === "" ||
      !email.match(/.*@.*\..*/g) ||
      streetAddress === "" ||
      city === "" ||
      state === "" ||
      zip === "" ||
      meals === "" ||
      emergencyFirstName === "" ||
      emergencyLastName === "" ||
      emergencyPhoneNumber === "" ||
      emergencyRelationship === "";

    const { classes } = this.props;

    return (
      <div>
        <h2>Create Member</h2>
        <form classname={classes.container} onSubmit={this.onSubmit}>
          <TextField
            classname={classes.textField}
            margin="normal"
            name="firstName"
            value={firstName}
            onChange={this.onChange}
            placeholder="First Name"
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="middleName"
            value={middleName}
            type="text"
            onChange={this.onChange}
            placeholder="Middle Name"
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="lastName"
            value={lastName}
            type="text"
            onChange={this.onChange}
            placeholder="Last Name"
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="birthday"
            value={birthday}
            type="date"
            onChange={this.onChange}
            placeholder="Birthday"
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="phoneNumber"
            value={phoneNumber}
            type="text"
            onChange={this.onChange}
            placeholder="Phone Number"
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="email"
            value={email}
            type="text"
            onChange={this.onChange}
            placeholder="Email"
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="streetAddress"
            value={streetAddress}
            type="text"
            onChange={this.onChange}
            placeholder="Street Address"
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="apartmentNumber"
            value={apartmentNumber}
            type="text"
            onChange={this.onChange}
            placeholder="Apartment No"
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="city"
            value={city}
            type="text"
            onChange={this.onChange}
            placeholder="City"
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="state"
            value={state}
            type="text"
            onChange={this.onChange}
            placeholder="State"
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="zip"
            value={zip}
            type="text"
            onChange={this.onChange}
            placeholder="Zip"
          />

          <h3>Meals</h3>
          <TextField
            classname={classes.textField}
            margin="normal"
            value={meals}
            type="text"
            onChange={this.onChange}
            name="meals"
            placeholder="0,1, or 2"
          />

          <h3>Emergency Contact</h3>
          <TextField
            classname={classes.textField}
            margin="normal"
            name="emergencyFirstName"
            value={emergencyFirstName}
            type="text"
            onChange={this.onChange}
            placeholder="First Name"
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="emergencyLastName"
            value={emergencyLastName}
            type="text"
            onChange={this.onChange}
            placeholder="Last Name"
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="emergencyPhoneNumber"
            value={emergencyPhoneNumber}
            type="text"
            onChange={this.onChange}
            placeholder="Phone Number"
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="emergencyRelationship"
            value={emergencyRelationship}
            type="text"
            onChange={this.onChange}
            placeholder="Relationship"
          />
          <br />
          <button disabled={isInvalid} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

CreateMember.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(CreateMember));
