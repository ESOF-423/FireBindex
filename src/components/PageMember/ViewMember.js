import React, { Component } from "react";
import { withFirebase } from "../Firebase";

const tableStyle = {
  textAlign: "left",
  width: "100%"
};

const MemberRows = ({ members }) =>
  members.map(member => (
    <tr style={tableStyle}>
      <td>
        {member.firstName} {member.middleName} {member.lastName}
      </td>
      <td>{getAge(member.birthday)}</td>
      <td>{member.phoneNumber}</td>
      <td>
        {member.streetAddress} {member.apartmentNumber}
        <br />
        {member.city}, {member.state} {member.zip}
      </td>
      <td>{member.email}</td>
      <td>
        {member.emergencyFirstName} {member.emergencyLastName}{" "}
        {member.emergencyRelationship}
        <br />
        {member.emergencyPhoneNumber}
      </td>
      <td>{member.meals}</td>
    </tr>
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
      members: [],
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

      console.log("here");
      console.log(membersList);
    });
  }

  render() {
    const { members, loading } = this.state;
    return (
      <div>
        <h2>All Members</h2>
        {loading && <div>Loading ...</div>}
        <table style={tableStyle}>
          <tbody>
            <tr style={tableStyle}>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Email</th>
              <th>Emergency Contact</th>
              <th>Meals</th>
            </tr>
            <MemberRows members={members} />
          </tbody>
        </table>
      </div>
    );
  }
}
export default withFirebase(ViewMember);
