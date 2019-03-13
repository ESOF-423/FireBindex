import React, { Component } from "react";
import { withFirebase } from "../Firebase";

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

    return (
      <div>
        <h2>Create Event</h2>
        <form onSubmit={this.onSubmit}>
          <input
            name="eventName"
            value={eventName}
            type="text"
            onChange={this.onChange}
            placeholder="Name"
          />
          <br />
          <input
            name="eventStartDate"
            value={eventStartDate}
            type="date"
            onChange={this.onChange}
            placeholder="Start Date"
          />
          <input
            name="eventEndDate"
            value={eventEndDate}
            type="date"
            onChange={this.onChange}
            placeholder="End Date"
          />
          <br />
          <input
            name="eventStartTime"
            value={eventStartTime}
            type="time"
            onChange={this.onChange}
            placeholder="Start Time"
          />
          <br />
          <input
            name="eventEndTime"
            value={eventEndTime}
            type="time"
            onChange={this.onChange}
            placeholder="End Time"
          />
          <input
            name="eventDescription"
            value={eventDescription}
            type="text"
            onChange={this.onChange}
            placeholder="Description"
          />
          <br />
          <button disabled={isInvalid} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default withFirebase(CreateEvent);
