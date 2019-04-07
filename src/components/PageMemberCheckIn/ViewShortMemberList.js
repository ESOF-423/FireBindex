import React, { Component } from "react";
import { withFirebase } from "../Firebase";
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

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

class ViewShortMemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      members: []
    };
  }
  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.members().on("value", snapshot => {
      const membersObject = snapshot.val();

      const membersList = Object.keys(membersObject).map(key => ({
        ...membersObject[key],
        uid: key
      }));

      this.setState({
        members: membersList,
        loading: false
      });      
    });
  }

  componentWillUnmount() {
    this.props.firebase.members().off();
  }

  removeMember(mid) {
    this.props.firebase.members().child(mid).remove();
  }

  render() {
    const { members, loading } = this.state;
    const { classes } = this.props;
    return (
      <div>
        {loading && <div>Loading ...</div>}
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>                            
            </TableRow>
          </TableHead>
          <TableBody>  
          {members.map(member => (
            <TableRow>
              <TableCell>
                {member.firstName} {member.middleName} {member.lastName}
              </TableCell>
              <TableCell>{getAge(member.birthday)}</TableCell>              
            </TableRow>))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

ViewShortMemberList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(ViewShortMemberList));
