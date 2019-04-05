import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import ViewUsers from "./ViewUser";

class PageAdmin extends Component {
  render() {
    return (
      <div>
        <ViewUsers/>        
      </div>
    );
  }
}
export default withFirebase(PageAdmin);
