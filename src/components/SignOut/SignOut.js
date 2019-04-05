import React from 'react';
import { Link } from 'react-router-dom'

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import Button from '@material-ui/core/Button';

const SignOutButton = ({ firebase }) => (
  <Link to={ROUTES.MEMBER_CHECK_IN} style={{ textDecoration: 'none' }}>
    <Button onClick={firebase.doSignOut}>
      Sign Out
    </Button>
  </Link>
);

export default withFirebase(SignOutButton);