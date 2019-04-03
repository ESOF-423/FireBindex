import React, { Component } from "react";
import { withFirebase } from "../Firebase";

class CheckInMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      event_id: this.props.location.state
    };
  }

  onSubmit = event => {
    const { firstName, lastName, event_id } = this.state;
    console.log("hello");
    console.log(event_id);

    this.props.firebase.members().on("value", snapshot => {
      const membersObject = snapshot.val();

      const membersList = Object.keys(membersObject).map(key => ({
        ...membersObject[key],
        uid: key
      }));

    //   console.log(membersList)

      for (var i = 0; i < membersList.length; i++) {
          console.log("in the loooooooop")
        if (
          membersList[i].firstName.toLowerCase() === firstName.toLowerCase() &&
          membersList[i].lastName.toLowerCase() === lastName.toLowerCase()
        ) {
          console.log("MATCH");

          const attendance = {
            user_id: membersList[i].uid,
            event_id: event_id.event_id
          };

          console.log(attendance);
          this.props.firebase.attendances().push(attendance);
        }
      }
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div>
        <h1>Sign in to event</h1>

        <form onSubmit={this.onSubmit}>
          <input
            name="firstName"
            value={firstName}
            onChange={this.onChange}
            type="text"
            placeholder="First Name"
          />
          <input
            name="lastName"
            value={lastName}
            onChange={this.onChange}
            type="text"
            placeholder="Last Name"
          />
          <button type="button" onClick={this.onSubmit}>Check In</button>
        </form>
      </div>
    );
  }
}

export default withFirebase(CheckInMember);
