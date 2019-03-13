import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import ViewEvent from "./ViewEvent";
import CreateEvent from "./CreateEvent";


class PageEvent extends Component {
  render() {
    return (
      <div>
        <CreateEvent />
        <ViewEvent />
      </div>
    );
  }
}
export default withFirebase(PageEvent);
