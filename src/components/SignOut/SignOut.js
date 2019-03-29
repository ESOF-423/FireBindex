import React from 'react';
import { Link } from 'react-router-dom'

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignOutButton = ({ firebase }) => (
  <Link to={ROUTES.MEMBER_CHECK_IN}>
    <button type="button" onClick={firebase.doSignOut}>
      Sign Out
    </button>
  </Link>
);

export default withFirebase(SignOutButton);