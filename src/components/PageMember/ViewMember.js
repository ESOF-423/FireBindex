import React, { Component } from "react";
import { withFirebase } from "../Firebase";

const tableStyle = {
  textAlign: 'left'
};

class ViewMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: "",
    };
  }
  componentDidMount() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    this.setState({
      date: month + "/" + date + "/" + year
    });

  }

  render() {
    return (
      <div>
        <h2>All Members</h2>
        <table>
          <tr style={tableStyle}>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Email</th>
            <th>Emergency Contact</th>
            <th>Meals</th>
          </tr>
          <tr>
            <td>firstName + ' ' + middleName + ' ' + lastName</td>
            <td>{this.state.date} - birthday</td>
            <td>phoneNumber</td>
            <td>streetAddress + ' ' + apartmentNumber + '\n' + city + ' ' + state + ' ' + zip</td>
            <td>email</td>
            <td>emergencyContactFirstName + ' ' + emergencyContactlastName + ' ' + emergencyContactPhoneNumber + ' ' + emergencyContactRelationship</td>
            <td>0, 1 or 2</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default withFirebase(ViewMember);
