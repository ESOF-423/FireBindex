//imort react
import React from 'react';
import { Link } from 'react-router-dom'
//import firebase
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Button from '@material-ui/core/Button';

const SignOutButton = ({ firebase }) => (
  // path to member check-in page after check out
  <Link to={ROUTES.MEMBER_CHECK_IN} style={{ textDecoration: 'none' }}>
    {/* do a sign out */}
    <Button onClick={firebase.doSignOut}>
      Sign Out
    </Button>
  </Link>
);

export default withFirebase(SignOutButton);