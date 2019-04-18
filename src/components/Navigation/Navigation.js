// import react modules
import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// import custom components
import { AuthUserContext } from "../Session";
import NavigationNonAuth from "./NavigationNonAuth";
import NavigationAuth from "./NavigationAuth";

// constant to display the correct nav bar to an authenticated or unauthenticated user
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (Navigation);
