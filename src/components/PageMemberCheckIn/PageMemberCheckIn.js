//import react & component 
import React, { Component } from "react";
//import firebase
import { withFirebase } from "../Firebase";
//import page
import ViewEventForCheckin from "./ViewEventForCheckin";
//import material-ui
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

//Create class pageMemberCheckIn
class PageMemberCheckIn extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={10} lg={10}>
            <div align="center">
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
