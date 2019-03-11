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

class CreateMember extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  writeUserData = event => {
    const {
      eventName,
      eventStartDate,
      eventEndDate,
      eventStartTime,
      eventEndTime,
      eventDescription
    } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword("yeet@mail.com", "123456")
      .then(authUser => {
        return this.props.firebase.members.set({
          eventName,
          eventStartDate,
          eventEndDate,
          eventStartTime,
          eventEndTime,
          eventDescription
        });
      });
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

    // const isValid = true;

    return (
      <div>
        <h2>Create Event</h2>
        <form onSubmit={this.writeUserData}>
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
            type="text"
            onChange={this.onChange}
            placeholder="Start Date"
          />
          <input
            name="eventEndDate"
            value={eventEndDate}
            type="text"
            onChange={this.onChange}
            placeholder="End Date"
          />
          <br />
          <input
            name="eventStartTime"
            value={eventStartTime}
            type="text"
            onChange={this.onChange}
            placeholder="Start Time"
          />
          <br/>
          <input
            name="eventEndTime"
            value={eventEndTime}
            type="text"
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
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default withFirebase(CreateMember);
