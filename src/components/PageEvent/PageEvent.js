import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import ViewEvent from "./ViewEvent";
import CreateEvent from "./CreateEvent";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

class PageEvent extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={5} lg={4}>
            <div style={{ margin: "20px" }}>
              <Card>
                <CardHeader align="center" title="Create a new event" />
                <CardContent>
                  <CreateEvent />
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={6}>
            <div style={{ margin: "20px" }}>
              <ViewEvent/>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withFirebase(PageEvent);
