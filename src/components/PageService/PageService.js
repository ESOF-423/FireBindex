import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import ViewService from "./ViewService";
import CreateService from "./CreateService";


class PageService extends Component {
  render() {
    return (
      <div>
        <CreateService />
        <ViewService />
      </div>
    );
  }
}
export default withFirebase(PageService);
