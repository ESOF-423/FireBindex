import React, { Component } from "react";
import { withFirebase } from "../Firebase";

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

class CreateMemberBase extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      loading: false,
      ...INITIAL_STATE };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.member().on('value', snapshot => {
      // convert messages list from snapshot

      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.props.firebase.member().off();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    console.log(this.props.firebase.users());
    console.log(this.props.firebase.members());

    // A post entry.
    var memberData = {
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      birthday: this.state.birthday,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      streetAddress: this.state.streetAddress,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      apartmentNumber: this.state.apartmentNumber,
      meals: this.state.meals,
      emergencyFirstName: this.state.emergencyFirstName,
      emergencyLastName: this.state.emergencyLastName,
      emergencyPhoneNumber: this.state.emergencyPhoneNumber,
      emergencyRelationship: this.state.emergencyRelationship
    };

    this.props.firebase.member().push(memberData);

    // Get a key for a new Post.
    var newMemberKey = this.props.firebase
      .database()
      .ref()
      .child("member")
      .push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates["/member/" + newMemberKey] = memberData;

    return this.props.firebase
      .database()
      .ref()
      .update(updates);
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

    // const isValid = true;

    return (
      <div>
        <h2>Create Member</h2>
        <form onSubmit={this.onSubmit}>
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
          <input
            name="apartmentNumber"
            value={apartmentNumber}
            type="text"
            onChange={this.onChange}
            placeholder="Apartment No"
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
          <br />
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
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const CreateMember = withFirebase(CreateMemberBase);

export default CreateMember;
