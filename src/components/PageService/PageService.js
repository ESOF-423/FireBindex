import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import ViewService from "./ViewService";
import CreateService from "./CreateService";
import Grid from "@material-ui/core/Grid";

class PageService extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={5} lg={4}>
            <CreateService />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={6}>
            <ViewService />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withFirebase(PageService);
