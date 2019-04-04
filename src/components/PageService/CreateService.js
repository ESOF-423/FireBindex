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
  serviceName: "",
  serviceStartDate: "",
  serviceEndDate: "",
  serviceStartTime: "",
  serviceEndTime: "",
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

    const isInvalid =
      serviceDescription === "" ||
      serviceEndDate === "" ||
      serviceEndTime === "" ||
      serviceName === "" ||
      serviceStartDate === "" ||
      serviceStartTime === "";

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
            placeholder="Name"
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="serviceStartDate"
            value={serviceStartDate}
            type="date"
            onChange={this.onChange}
            placeholder="Start Date"
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="serviceEndDate"
            value={serviceEndDate}
            type="date"
            onChange={this.onChange}
            placeholder="End Date"
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="serviceStartTime"
            value={serviceStartTime}
            type="time"
            onChange={this.onChange}
            placeholder="Start Time"
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="serviceEndTime"
            value={serviceEndTime}
            type="time"
            onChange={this.onChange}
            placeholder="End Time"
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="serviceDescription"
            value={serviceDescription}
            type="text"
            onChange={this.onChange}
            placeholder="Description"
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
CreateService.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(CreateService));
