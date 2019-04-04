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
  eventName: "",
  eventStartDate: "",
  eventEndDate: "",
  eventStartTime: "",
  eventEndTime: "",
  eventDescription: ""
};

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    this.props.firebase.events().push(this.state);
  };

  render() {
    const {
      eventName,
      eventStartDate,
      eventEndDate,
      eventStartTime,
      eventEndTime,
      eventDescription
    } = this.state;

    const isInvalid =
      eventDescription === "" ||
      eventEndDate === "" ||
      eventEndTime === "" ||
      eventName === "" ||
      eventStartDate === "" ||
      eventStartTime === "";

    const { classes } = this.props;

    return (
      <div>
        <h2>Create Event</h2>
        <form classname={classes.container} onSubmit={this.onSubmit}>
          <TextField
            classname={classes.textField}
            margin="normal"
            name="eventName"
            value={eventName}
            type="text"
            onChange={this.onChange}
            label="Name"
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="eventStartDate"
            value={eventStartDate}
            type="date"
            onChange={this.onChange}
            label="Start Date"
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="eventEndDate"
            value={eventEndDate}
            type="date"
            onChange={this.onChange}
            label="End Date"
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="eventStartTime"
            value={eventStartTime}
            type="time"
            onChange={this.onChange}
            label="Start Time"
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="eventEndTime"
            value={eventEndTime}
            type="time"
            onChange={this.onChange}
            label="End Time"
          />
          <br />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="eventDescription"
            value={eventDescription}
            type="text"
            onChange={this.onChange}
            label="Description"
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

CreateEvent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(CreateEvent));
