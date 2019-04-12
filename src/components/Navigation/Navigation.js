// import react modules
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import custom components
import SignOutButton from "../SignOut/SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

// import @material-ui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// constant to display the correct nav bar to an authenticated or unauthenticated user
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

// the navbar for authorized users
class NavigationAuth extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Belgrade Senior Center
            </Typography>
            <div style={{ width: "24px" }} />
            <Link
              style={{ textDecoration: "none" }}
              to={ROUTES.MEMBER_CHECK_IN}
            >
              <Button>Member Check In</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={ROUTES.HOME}>
              <Button>Home</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={ROUTES.ACCOUNT}>
              <Button>Account</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={ROUTES.ADMIN}>
              <Button>Admin</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={ROUTES.MEMBER}>
              <Button>Members</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={ROUTES.EVENT}>
              <Button>Event</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={ROUTES.SERVICE}>
              <Button>Service</Button>
            </Link>
            <div style={{ marginLeft: "auto" }}>
              <SignOutButton />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

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

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (Navigation);
