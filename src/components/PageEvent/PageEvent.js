import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import CreateEvent from "./CreateEvent";
import ViewEvents from "./ViewEvent";

class PageEvent extends Component {
  render() {
    return (
      <div>
        <CreateEvent />
        <ViewEvents />
      </div>
    );
  }
}
export default withFirebase(PageEvent);
