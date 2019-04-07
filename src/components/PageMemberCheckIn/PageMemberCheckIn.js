import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import ViewEventForCheckin from "./ViewEventForCheckin";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

class PageMemberCheckIn extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <div align="center" style={{ marginTop: "20px" }}>
              <Card>
                <CardHeader
                  title="Member Check In"
                  subheader="Choose an event you'd like to check into"
                />
                <CardContent>
                  <ViewEventForCheckin />
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withFirebase(PageMemberCheckIn);
