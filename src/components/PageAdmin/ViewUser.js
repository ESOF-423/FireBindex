import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import MUIDataTable from "mui-datatables";
import Button from "@material-ui/core/Button";

const columns = [
  "Username",
  "ID",
  "Email",
  ""
];

const options = {
  selectableRows: false,
  responsive: "scroll"
};

class ViewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.props.firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      this.setState({
        users: usersList,
      });
    });
  }

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
          Delete Member
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
