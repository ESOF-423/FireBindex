import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import Button from "@material-ui/core/Button";
import MUIDataTable from "mui-datatables";

const columns = ["Name", "Date", ""];

const options = {
  selectableRows: false,
  responsive: "scroll"
};

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

class ViewShortMemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }
  componentDidMount() {
    this.props.firebase.members().on("value", snapshot => {
      const membersObject = snapshot.val();

      const membersList = Object.keys(membersObject).map(key => ({
        ...membersObject[key],
        uid: key
      }));

      this.setState({
        members: membersList,
      });      
    });
  }

  componentWillUnmount() {
    this.props.firebase.members().off();
  }

  removeMember(mid) {
    this.props.firebase.members().child(mid).remove();
  }

  render() {
    const { members } = this.state;

    var membersArray = [];

    members.map(member =>
      membersArray.push([
        member.firstName + " " + member.middleName + " " + member.lastName,
        getAge(member.birthday),
        <Button
          type="submit"
          size="small"
          variant="contained"
          onClick={(member.uid)}
        >
          Check In
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

export default withFirebase(ViewShortMemberList);
