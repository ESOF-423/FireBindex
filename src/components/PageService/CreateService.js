//import react, component
import React, { Component } from "react";
//import firebase
import { withFirebase } from "../Firebase";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

const INITIAL_STATE = {
  serviceName: "",
  serviceStartDate: new Date(),
  serviceEndDate: new Date(),
  serviceStartTime: new Date(),
  serviceEndTime: new Date(),
  serviceDescription: ""
};

//class createService
class CreateService extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = service => {
    this.setState({ [service.target.name]: service.target.value });
  };

  //onSubmit, push service into services in db
  onSubmit = service => {
    this.props.firebase.services().push(this.state);
  };

  render() {
    const {
      serviceName,
      serviceStartDate,
      serviceEndDate,
      serviceStartTime,
      serviceEndTime,
      serviceDescription
    } = this.state;

    //check if data in user form is within what we specify
    // const isInvalid =
    //   serviceDescription === "" ||
    //   serviceEndDate === "" ||
    //   serviceEndTime === "" ||
    //   serviceName === "" ||
    //   serviceStartDate === "" ||
    //   serviceStartTime === "";

    const { classes } = this.props;

    return (
      <div>
        <form classname={classes.container} onSubmit={this.onSubmit}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="serviceName"
                value={serviceName}
                type="text"
                onChange={this.onChange}
                label="Name"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="serviceStartDate"
                value={serviceStartDate}
                type="date"
                onChange={this.onChange}
                label="Start Date"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="serviceEndDate"
                value={serviceEndDate}
                type="date"
                onChange={this.onChange}
                label="End Date"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="serviceStartTime"
                value={serviceStartTime}
                type="time"
                onChange={this.onChange}
                label="Start Time"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="serviceEndTime"
                value={serviceEndTime}
                type="time"
                onChange={this.onChange}
                label="End Time"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="serviceDescription"
                value={serviceDescription}
                type="text"
                onChange={this.onChange}
                label="Description"
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
CreateService.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(CreateService));
