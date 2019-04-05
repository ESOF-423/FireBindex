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
  serviceName: "",
  serviceStartDate: new Date(),
  serviceEndDate: new Date(),
  serviceStartTime: new Date(),
  serviceEndTime: new Date(),
  serviceDescription: ""
};

class CreateService extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = service => {
    this.setState({ [service.target.name]: service.target.value });
  };

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
        <h2>Create Service</h2>
        <form classname={classes.container} onSubmit={this.onSubmit}>
          <TextField
            classname={classes.textField}
            margin="normal"
            name="serviceName"
            value={serviceName}
            type="text"
            onChange={this.onChange}
            label="Name"
            required
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="serviceStartDate"
            value={serviceStartDate}
            type="date"
            onChange={this.onChange}
            label="Start Date"
            required
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="serviceEndDate"
            value={serviceEndDate}
            type="date"
            onChange={this.onChange}
            label="End Date"
            required
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="serviceStartTime"
            value={serviceStartTime}
            type="time"
            onChange={this.onChange}
            label="Start Time"
            required
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="serviceEndTime"
            value={serviceEndTime}
            type="time"
            onChange={this.onChange}
            label="End Time"
            required
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="serviceDescription"
            value={serviceDescription}
            type="text"
            onChange={this.onChange}
            label="Description"
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
CreateService.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(CreateService));
