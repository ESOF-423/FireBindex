import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import CreateMember from "./CreateMember";
import ViewMembers from "./ViewMember";
import Grid from "@material-ui/core/Grid";

class PageMember extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <CreateMember />
            <ViewMembers />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withFirebase(PageMember);
