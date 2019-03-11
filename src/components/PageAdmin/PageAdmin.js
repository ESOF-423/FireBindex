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
  </div>
);

export default withFirebase(AdminPage);