// import react/firebase components
import React, { Component } from "react";
import { withFirebase } from "../Firebase";

// import custom components
import CreateMember from "./CreateMember";
import ViewMembers from "./ViewMember";

// import @material-ui components
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

// page that displays the create and view member components
class PageMember extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Card>
              <CardHeader align="center" title="Create a new member" />
              <CardContent>
                <CreateMember />
              </CardContent>
            </Card>
            <ViewMembers />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withFirebase(PageMember);
