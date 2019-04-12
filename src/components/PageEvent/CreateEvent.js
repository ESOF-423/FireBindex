// import react and firebase components
import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import PropTypes from "prop-types";

// import @material-ui components
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

// form style
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
});

// form initial state
const INITIAL_STATE = {
  eventName: "",
  eventStartDate: new Date(),
  eventEndDate: new Date(),
  eventStartTime: new Date(),
  eventEndTime: new Date(),
  eventDescription: ""
};

// class that contains the form to create an event
class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  // updates the state when a form field is filled out
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // pushes event to database
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

    const { classes } = this.props;

    // renders the form
    return (
      <div>
        <form classname={classes.container} onSubmit={this.onSubmit}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                classname={classes.textField}
                margin="normal"
                name="eventName"
                value={eventName}
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
                name="eventStartDate"
                value={eventStartDate}
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
                name="eventEndDate"
                value={eventEndDate}
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
                name="eventStartTime"
                value={eventStartTime}
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
                name="eventEndTime"
                value={eventEndTime}
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
                name="eventDescription"
                value={eventDescription}
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

CreateEvent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(CreateEvent));
