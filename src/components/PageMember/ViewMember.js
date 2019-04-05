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

const MemberRows = ({ members }) =>
  members.map(member => (
    <TableRow>
      <TableCell>
        {member.firstName} {member.middleName} {member.lastName}
      </TableCell>
      <TableCell>{getAge(member.birthday)}</TableCell>
      <TableCell>{member.phoneNumber}</TableCell>
      <TableCell>
        {member.streetAddress} {member.apartmentNumber}
        <br />
        {member.city}, {member.state} {member.zip}
      </TableCell>
      <TableCell>{member.email}</TableCell>
      <TableCell>
        {member.emergencyFirstName} {member.emergencyLastName}{" "}
        {member.emergencyRelationship}
        <br />
        {member.emergencyPhoneNumber}
      </TableCell>
      <TableCell>{member.meals}</TableCell>
    </TableRow>
  ));

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

class ViewMember extends Component {
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

      console.log(membersList);
    });
  }

  componentWillUnmount() {
    this.props.firebase.members().off();
  }

  render() {
    const { members, loading } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <h2>All Members</h2>
        {loading && <div>Loading ...</div>}
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Emergency Contact</TableCell>
              <TableCell>Meals</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <MemberRows members={members} />
          </TableBody>
        </Table>
      </div>
    );
  }
}

ViewMember.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(ViewMember));
