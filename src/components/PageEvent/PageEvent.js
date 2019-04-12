//import react/firebase components
import React, { Component } from "react";
import { withFirebase } from "../Firebase";

// import custom components
import ViewEvent from "./ViewEvent";
import CreateEvent from "./CreateEvent";

// import @material-ui components
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

// class that renders the event page with create and view event capabilities
class PageEvent extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={5} lg={4}>
              <Card>
                <CardHeader align="center" title="Create a new event" />
                <CardContent>
                  <CreateEvent />
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={6}>
              <ViewEvent/>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withFirebase(PageEvent);
