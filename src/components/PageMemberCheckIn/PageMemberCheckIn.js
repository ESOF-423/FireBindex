import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import ViewEventForCheckin from "./ViewEventForCheckin";
import Grid from "@material-ui/core/Grid";

class PageMemberCheckIn extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <h1>Member Check In</h1>
            <ViewEventForCheckin />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withFirebase(PageMemberCheckIn);
