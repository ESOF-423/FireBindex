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
  eventName: "",
  eventStartDate: new Date(),
  eventEndDate: new Date(),
  eventStartTime: new Date(),
  eventEndTime: new Date(),
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

    // const isInvalid =
    //   eventDescription === "" ||
    //   eventEndDate === "" ||
    //   eventEndTime === "" ||
    //   eventName === "" ||
    //   eventStartDate === "" ||
    //   eventStartTime === "";

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
            required
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
            required
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="eventEndDate"
            value={eventEndDate}
            type="date"
            onChange={this.onChange}
            label="End Date"
            required
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
            required
          />
          <TextField
            classname={classes.textField}
            margin="normal"
            name="eventEndTime"
            value={eventEndTime}
            type="time"
            onChange={this.onChange}
            label="End Time"
            required
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

CreateEvent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(CreateEvent));
