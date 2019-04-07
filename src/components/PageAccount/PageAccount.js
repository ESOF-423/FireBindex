import React from "react";

// import { PasswordForgetForm } from "../PagePasswordForget/PagePasswordForget";
import PasswordChangeForm from "../PasswordChange/PasswordChange";
import { AuthUserContext, withAuthorization } from "../Session";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <Grid container>
          {/* <Grid item xs={12} sm={8} md={6} lg={6}>
            <Card>
              <CardHeader title="Forgot your password?" />
              <CardContent>
                <PasswordForgetForm />
              </CardContent>
            </Card>
          </Grid> */}
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <Card>
              <CardHeader title="Reset your password" />
              <CardContent>
                <PasswordChangeForm />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
