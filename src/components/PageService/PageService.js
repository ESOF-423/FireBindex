import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import ViewService from "./ViewService";
import CreateService from "./CreateService";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

class PageService extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={5} lg={4}>
            <Card>
              <CardHeader align="center" title="Create a new service" />
              <CardContent>
                <CreateService />
              </CardContent>
            </Card>
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
