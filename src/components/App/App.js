// import react
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withAuthentication } from "../Session";

// import pages
import Navigation from "../Navigation/Navigation";
import MemberCheckInPage from "../PageMemberCheckIn/PageMemberCheckIn";
import SignUpPage from "../PageSignUp/PageSignUp";
import SignInPage from "../PageSignIn/PageSignIn";
import PasswordForgetPage from "../PagePasswordForget/PagePasswordForget";
import HomePage from "../PageHome/PageHome";
import AccountPage from "../PageAccount/PageAccount";
import AdminPage from "../PageAdmin/PageAdmin";
import CreateMember from "../PageMember/CreateMember"
import MemberPage from "../PageMember/ViewMember";
import ViewEvent from "../PageEvent/ViewEvent";
import CreateEvent from "../PageEvent/CreateEvent";
import ViewService from "../PageService/ViewService";
import CreateService from "../PageService/CreateService";
import CheckInMember from "../PageMemberCheckIn/CheckInMember";
import AttendancePage from "../ViewEventAttendance/ViewEventAttendance"

// import routes
import * as ROUTES from "../../constants/routes";

// constant to manage the whole app and its routing
const App = () => (
  <Router>
    <div>
      <Navigation />
      <div style={{ margin: "24px" }}>
        <Route
          exact
          path={ROUTES.MEMBER_CHECK_IN}
          component={MemberCheckInPage}
        />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.MEMBER} component={MemberPage} />
        <Route path={ROUTES.EVENT_CHECK_IN} component={CheckInMember} />
        <Route path={ROUTES.EVENT} component={ViewEvent} />
        <Route path={ROUTES.CREATE_EVENT} component={CreateEvent} />
        <Route path={ROUTES.SERVICE} component={ViewService} />
        <Route path={ROUTES.CREATE_SERVICE} component={CreateService} />
        <Route path={ROUTES.EVENT_VIEW_ATTENDANCE} component={AttendancePage} />
        <Route path={ROUTES.CREATE_MEMBER} component={CreateMember} />
      </div>
    </div>
  </Router>
);

export default withAuthentication(App);
