// import react/firebase components
import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import MUIDataTable from "mui-datatables";

// import @material-ui components
import Button from "@material-ui/core/Button";

// headers for the table
const columns = [
  "Name",
  "Age",
  "Phone",
  "Address",
  "Email",
  "Emergency Contact",
  "Meals",
  ""
];

// options for the table
const options = {
  selectableRows: false,
  responsive: "scroll"
};

// function to convert birthday to age
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

// function to display the correct meal type
function convertMeals(input) {
  switch (input) {
    case 0: return "In-Center Meals"
    case 1: return "Meals on Wheels"
    case 2: return "No Meals"
    default: return "DB ERROR"
  }
}

// class to view all the members in the database

class ViewMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }

  // function that gets all the members from the database
  componentDidMount() {
    this.props.firebase.members().on("value", snapshot => {
      const membersObject = snapshot.val();

      const membersList = Object.keys(membersObject).map(key => ({
        ...membersObject[key],
        uid: key
      }));

      this.setState({
        members: membersList
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.members().off();
  }

  // function to delete a member
  removeMember(mid) {
    this.props.firebase
      .members()
      .child(mid)
      .remove();
  }

  render() {
    const { members } = this.state;

    var membersArray = [];

    // maps the member JSON data to a member array for the table
    members.map(member =>
      membersArray.push([
        member.firstName + " " + member.lastName,
        getAge(member.birthday),
        member.phoneNumber,
        member.streetAddress +
          " " +
          member.apartmentNumber +
          "\n" +
          member.city +
          " " +
          member.state +
          " " +
          member.zip,
        member.email,
        member.emergencyFirstName +
          " " +
          member.emergencyLastName +
          " " +
          member.emergencyPhoneNumber +
          " " +
          member.emergencyRelationship,
        convertMeals(member.meals),
        <Button
          type="submit"
          size="small"
          variant="contained"
          onClick={e => this.removeMember(member.uid)}
        >
          Delete Member
        </Button>
      ])
    );

    return (
      <div>
        <MUIDataTable
          title={"All Members"}
          data={membersArray}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

export default withFirebase(ViewMember);
