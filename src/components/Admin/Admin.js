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
        <CreateMember />
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
  </div>
);

const INITIAL_STATE = {
  firstName: "",
  middleName: "",
  lastName: "",
  birthday: "",
  phoneNumber: "",
  email: "",
  streetAddress: "",
  city: "",
  state: "",
  zip: "",
  apartmentNumber: "",
  meals: 2,
  emergencyFirstName: "",
  emergencyLastName: "",
  emergencyPhoneNumber: "",
  emergencyRelationship: ""
};

class CreateMember extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  writeUserData = event => {
    const {
      firstName,
      middleName,
      lastName,
      birthday,
      phoneNumber,
      email,
      streetAddress,
      city,
      state,
      zip,
      apartmentNumber,
      meals,
      emergencyFirstName,
      emergencyLastName,
      emergencyPhoneNumber,
      emergencyRelationship
    } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword("yeet@mail.com", "123456")
      .then(authUser => {
        return this.props.firebase.members.set({
          firstName,
          middleName,
          lastName,
          birthday,
          phoneNumber,
          email,
          streetAddress,
          city,
          state,
          zip,
          apartmentNumber,
          meals,
          emergencyFirstName,
          emergencyLastName,
          emergencyPhoneNumber,
          emergencyRelationship
        });
      });
  };

  render() {
    const {
      firstName,
      middleName,
      lastName,
      birthday,
      phoneNumber,
      email,
      streetAddress,
      city,
      state,
      zip,
      apartmentNumber,
      meals,
      emergencyFirstName,
      emergencyLastName,
      emergencyPhoneNumber,
      emergencyRelationship
    } = this.state;

    const isValid = true;

    return (
      <div>
        <h2>Create Member</h2>
        <form onSubmit={this.writeUserData}>
          <input
            name="firstName"
            value={firstName}
            type="text"
            onChange={this.onChange}
            placeholder="First Name"
          />
          <input
            name="middleName"
            value={middleName}
            type="text"
            onChange={this.onChange}
            placeholder="Middle Name"
          />
          <input
            name="lastName"
            value={lastName}
            type="text"
            onChange={this.onChange}
            placeholder="Last Name"
          />
          <br />
          <input
            name="birthday"
            value={birthday}
            type="text"
            onChange={this.onChange}
            placeholder="Birthday"
          />
          <input
            name="phoneNumber"
            value={phoneNumber}
            type="text"
            onChange={this.onChange}
            placeholder="Phone Number"
          />
          <input
            name="email"
            value={email}
            type="text"
            onChange={this.onChange}
            placeholder="Email"
          />
          <br />
          <input
            name="streetAddress"
            value={streetAddress}
            type="text"
            onChange={this.onChange}
            placeholder="Street Address"
          />
          <br />
          <input
            name="city"
            value={city}
            type="text"
            onChange={this.onChange}
            placeholder="City"
          />
          <input
            name="state"
            value={state}
            type="text"
            onChange={this.onChange}
            placeholder="State"
          />
          <input
            name="zip"
            value={zip}
            type="text"
            onChange={this.onChange}
            placeholder="Zip"
          />
          <input
            name="apartmentNumber"
            value={apartmentNumber}
            type="text"
            onChange={this.onChange}
            placeholder="Apartment No"
          />
          <h3>Meals</h3>
          <input
            value={meals}
            type="text"
            onChange={this.onChange}
            name="meals"
            placeholder="0,1, or 2"
          />

          <h3>Emergency Contact</h3>
          <input
            name="emergencyFirstName"
            value={emergencyFirstName}
            type="text"
            onChange={this.onChange}
            placeholder="First Name"
          />
          <input
            name="emergencyLastName"
            value={emergencyLastName}
            type="text"
            onChange={this.onChange}
            placeholder="Last Name"
          />
          <input
            name="emergencyPhoneNumber"
            value={emergencyPhoneNumber}
            type="text"
            onChange={this.onChange}
            placeholder="Phone Number"
          />
          <input
            name="emergencyRelationship"
            value={emergencyRelationship}
            type="text"
            onChange={this.onChange}
            placeholder="Relationship"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default withFirebase(AdminPage);
