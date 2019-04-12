//import react
import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
//import firebase
import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'
import AuthUserContext from './context'

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      //update listener to auth change in state
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if (!condition(authUser)) {
            this.props.history.push(ROUTES.SIGN_IN);
          }
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (        
        <AuthUserContext.Consumer>
            {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
            }
      </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
    withRouter,
    withFirebase,
  )(WithAuthorization);
};

export default withAuthorization;