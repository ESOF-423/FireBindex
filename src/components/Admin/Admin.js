import React, { Component } from "react";
import { withFirebase } from "../Firebase";

class AdminPage extends Component {
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

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h1>Admin</h1>

        {loading && <div>Loading ...</div>}

        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <div>
    <h2>Users</h2>
    <ul>
      {users.map(user => (
        <li key={user.uid}>
          <strong>Username:</strong> {user.username}
          <ul>
            <li>
              <strong>ID:</strong> {user.uid}
            </li>
            <li>
              <strong>E-Mail:</strong> {user.email}
            </li>
          </ul>
        </li>
      ))}
    </ul>
    <h2>Create Member</h2>
    <form>
      <input type="text" id="firstname" placeholder="First Name" />
      <input type="text" id="middlename" placeholder="Middle Name" />
      <input type="text" id="lastname" placeholder="Last Name" />
      <br />
      <input type="text" id="birthday" placeholder="Birthday" />
      <input type="text" id="phonenumber" placeholder="Phone Number" />
      <input type="text" id="emailaddress" placeholder="Email" />
      <br />
      <input type="text" id="streetaddress" placeholder="Street Address" />
      <br />
      <input type="text" id="city" placeholder="City" />
      <input type="text" id="state" placeholder="State" />
      <input type="text" id="zip" placeholder="Zip" />
      <input type="text" id="apartmentnumber" placeholder="Apartment No" />
      <h3>Meals</h3>
      <input type="radio" name="meals" id="mealsincenter" />
      Meals In Center
      <input type="radio" name="meals" id="mealsonwheels" />
      Meals On Wheels
      <input type="radio" name="meals" id="nomeals" />
      None
      <h3>Emergency Contact</h3>
      <input
        type="text"
        id="emergencycontactfirstname"
        placeholder="First Name"
      />
      <input
        type="text"
        id="emergencycontactlastname"
        placeholder="Last Name"
      />
      <input
        type="text"
        id="emergencycontactphonenumber"
        placeholder="Phone Number"
      />
      <input
        type="text"
        id="emergencycontactrelationship"
        placeholder="Relationship"
      />
      <input type="submit" id="creatememberbutton" />
    </form>
    <br />
    <br />
  </div>
);

export default withFirebase(AdminPage);
