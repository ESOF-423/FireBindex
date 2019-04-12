// import react components
import React, { Component } from "react";

// import firebase components
import { withFirebase } from "../Firebase";

// import custom components
import ViewUsers from "./ViewUser";

// the Admin page
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
