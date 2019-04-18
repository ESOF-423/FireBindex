// import react modules
import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import custom components
import * as ROUTES from "../../constants/routes";

// import @material-ui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// the navbar for unauthorized users
function NavigationNonAuth(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Belgrade Senior Center
          </Typography>
          <div style={{ width: "24px" }} />
          <div style={{ marginLeft: "auto" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={ROUTES.MEMBER_CHECK_IN}
            >
              <Button>Member Check In</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={ROUTES.SIGN_IN}>
              <Button>Sign In</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default (NavigationNonAuth);
