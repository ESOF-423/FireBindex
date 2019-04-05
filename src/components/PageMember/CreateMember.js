import React, { Component } from "react";
import { withFirebase } from "../Firebase";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
  birthday: new Date(),
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

    // const isInvalid =
    //   firstName === "" ||
    //   lastName === "" ||
    //   birthday === "" ||
    //   phoneNumber === "" ||
    //   !email.match(/.*@.*\..*/g) ||
    //   streetAddress === "" ||
    //   city === "" ||
    //   state === "" ||
    //   zip === "" ||
    //   meals === "" ||
    //   emergencyFirstName === "" ||
    //   emergencyLastName === "" ||
    //   emergencyPhoneNumber === "" ||
    //   emergencyRelationship === "";

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
            label="First Name"
            required
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="middleName"
            value={middleName}
            type="text"
            onChange={this.onChange}
            label="Middle Name"
            required
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="lastName"
            value={lastName}
            type="text"
            onChange={this.onChange}
            label="Last Name"
            required
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="birthday"
            value={birthday}
            type="date"
            onChange={this.onChange}
            label="Birthday"
            required
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="phoneNumber"
            value={phoneNumber}
            type="text"
            onChange={this.onChange}
            label="Phone Number"
            required
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="email"
            value={email}
            type="text"
            onChange={this.onChange}
            label="Email"
            required
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="streetAddress"
            value={streetAddress}
            type="text"
            onChange={this.onChange}
            label="Street Address"
            required
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="apartmentNumber"
            value={apartmentNumber}
            type="text"
            onChange={this.onChange}
            label="Apartment No"
            required
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="city"
            value={city}
            type="text"
            onChange={this.onChange}
            label="City"
            required
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="state"
            value={state}
            type="text"
            onChange={this.onChange}
            label="State"
            required
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="zip"
            value={zip}
            type="text"
            onChange={this.onChange}
            label="Zip"
            required
          />

          <h3>Meals</h3>
          <TextField
            classname={classes.textField}
            margin="normal"
            value={meals}
            type="text"
            onChange={this.onChange}
            name="meals"
            label="0,1, or 2"
            required
          />

          <h3>Emergency Contact</h3>
          <TextField
            classname={classes.textField}
            margin="normal"
            name="emergencyFirstName"
            value={emergencyFirstName}
            type="text"
            onChange={this.onChange}
            label="First Name"
            required
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="emergencyLastName"
            value={emergencyLastName}
            type="text"
            onChange={this.onChange}
            label="Last Name"
            required
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="emergencyPhoneNumber"
            value={emergencyPhoneNumber}
            type="text"
            onChange={this.onChange}
            label="Phone Number"
            required
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="emergencyRelationship"
            value={emergencyRelationship}
            type="text"
            onChange={this.onChange}
            label="Relationship"
            required
          />
          <br />
          <Button
            // disabled={isInvalid}
            type="submit"
            size="large"
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

CreateMember.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(CreateMember));
