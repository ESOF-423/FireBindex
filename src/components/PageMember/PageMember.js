import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import CreateMember from "./CreateMember";
import ViewMembers from "./ViewMember";

class PageMember extends Component {
  render() {
    return (
      <div>
        <CreateMember />
        <ViewMembers />
      </div>
    );
  }
}
export default withFirebase(PageMember);
