// import react/firebase components
import React, { Component } from "react";
import { withFirebase } from "../Firebase";

// import @material-ui components
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

// form styles
const styles = ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

// form initial state
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

// class with the form to create a member
class CreateMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };
  }

  // updates the state whenever a form field is modified
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // submits the member to the database
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

    const { classes } = this.props;

    // the form
    return (
      <div>
        <form classname={classes.container} onSubmit={this.onSubmit}>
          <Grid container>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="firstName"
                value={firstName}
                onChange={this.onChange}
                label="First Name"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="middleName"
                value={middleName}
                type="text"
                onChange={this.onChange}
                label="Middle Name"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="lastName"
                value={lastName}
                type="text"
                onChange={this.onChange}
                label="Last Name"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="birthday"
                value={birthday}
                type="date"
                onChange={this.onChange}
                label="Birthday"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="phoneNumber"
                value={phoneNumber}
                type="text"
                onChange={this.onChange}
                label="Phone Number"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="email"
                value={email}
                type="text"
                onChange={this.onChange}
                label="Email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="streetAddress"
                value={streetAddress}
                type="text"
                onChange={this.onChange}
                label="Street Address"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="apartmentNumber"
                value={apartmentNumber}
                type="text"
                onChange={this.onChange}
                label="Apartment No"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="city"
                value={city}
                type="text"
                onChange={this.onChange}
                label="City"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="state"
                value={state}
                type="text"
                onChange={this.onChange}
                label="State"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="zip"
                value={zip}
                type="text"
                onChange={this.onChange}
                label="Zip"
                required
                fullWidth
              />
            </Grid>
          </Grid>
          <h3>Meals</h3>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup
                  name="meals"
                  className={classes.group}
                  value={meals}
                  onChange={this.onChange}
                  type="number"
                >
                  <FormControlLabel value="0" control={<Radio />} label="In-Center Meals" />
                  <FormControlLabel value="1" control={<Radio />} label="Meals on Wheels" />
                  <FormControlLabel value="2" control={<Radio />} label="No Meals" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <h3>Emergency Contact</h3>
          <Grid container>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="emergencyFirstName"
                value={emergencyFirstName}
                type="text"
                onChange={this.onChange}
                label="First Name"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="emergencyLastName"
                value={emergencyLastName}
                type="text"
                onChange={this.onChange}
                label="Last Name"
                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="emergencyPhoneNumber"
                value={emergencyPhoneNumber}
                type="text"
                onChange={this.onChange}
                label="Phone Number"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="emergencyRelationship"
                value={emergencyRelationship}
                type="text"
                onChange={this.onChange}
                label="Relationship"
                required
                fullWidth
              />
            </Grid>
          </Grid>

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

export default withStyles(styles)(withFirebase(CreateMember));
