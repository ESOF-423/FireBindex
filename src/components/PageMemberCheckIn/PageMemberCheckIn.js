import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import ViewEventForCheckin from "./ViewEventForCheckin"

class PageMemberCheckIn extends Component {
  render() {
    return (
      <div>
        <h1>Member Check In</h1>
        <ViewEventForCheckin />
      </div>
    );
  }
}

export default withFirebase(PageMemberCheckIn);
