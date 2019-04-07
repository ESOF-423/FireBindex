import React, { Component } from "react";
import firebase, { withFirebase } from "../Firebase";

import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class ViewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      this.setState({
        users: usersList,
        loading: false
      });      
    });
  }  

  removeUser(uid) {    
    this.props.firebase.users().child(uid).remove();
  }  

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <h2>Users</h2>
        {loading && <div>Loading ...</div>}
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>              
              <TableCell>User Id</TableCell>
              <TableCell>Email</TableCell>
              <TableCell></TableCell>              
            </TableRow>
          </TableHead>
          <TableBody>           
            {users.map(user => (
            <TableRow key={user.uid}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.uid}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell><button type="submit"  onClick={
                (e) => this.removeUser(user.uid)}>
                Delete User</button>
              </TableCell>
            </TableRow>))}                        
          </TableBody>
        </Table>
      </div>
    );
  }
}

ViewUser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(ViewUser));
