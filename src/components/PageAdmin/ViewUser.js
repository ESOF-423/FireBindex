// import react component
import React, { Component } from "react";

// import firebase
import { withFirebase } from "../Firebase";

// import node module
import MUIDataTable from "mui-datatables";

// import @material-ui components
import Button from "@material-ui/core/Button";

// sets the headers of the columns of the table
const columns = ["Username", "ID", "Email", ""];

// sets the options for the table
const options = {
  selectableRows: false,
  responsive: "scroll"
};

// class to view user information
class ViewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  // function runs when page renders
  componentDidMount() {
    this.props.firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      this.setState({
        users: usersList
      });
    });
  }

  // deletes user
  removeUser(uid) {
    this.props.firebase
      .users()
      .child(uid)
      .remove();
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users } = this.state;

    var usersArray = [];

    // maps json data to array data for table
    users.map(user =>
      usersArray.push([
        user.username,
        user.uid,
        user.email,
        <Button
          type="submit"
          size="small"
          variant="contained"
          onClick={e => this.removeUser(user.uid)}
        >
          Delete User
        </Button>
      ])
    );

    return (
      <div>
        <MUIDataTable
          title={"All Users"}
          data={usersArray}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

export default withFirebase(ViewUser);
