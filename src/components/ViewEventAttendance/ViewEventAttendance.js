import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import Grid from "@material-ui/core/Grid";
import MUIDataTable from "mui-datatables";

const columns = ["Name", "Phone"];

const options = {
  selectableRows: false,
  responsive: "scroll"
};

class ViewEventAttendance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      eventUID: this.props.location.state.eventUID,
      eventName: this.props.location.state.eventName,
      attendances: [],
      attendingMembers: []
    };
  }

  componentDidMount() {
    this.props.firebase.attendances().on("value", snapshot => {
      const attendanceObject = snapshot.val();
      try {
        const attendanceList = Object.keys(attendanceObject).map(key => ({
          ...attendanceObject[key],
          uid: key
        }));

        const attendances = attendanceList.filter(
          att => att.event_id === this.state.eventUID
        );

        this.setState({
			attendances: attendances
        });
      } catch {
        this.setState({
			attendances: null
        });
      }
      console.log("attending: ");
      console.log(this.state.attendances);
    });

    this.props.firebase.members().on("value", snapshot => {
      const membersObject = snapshot.val();

      const membersList = Object.keys(membersObject).map(key => ({
        ...membersObject[key],
        uid: key
      }));

      console.log("all members: ");
	  console.log(this.state.members);
	  
	  const attendingMembers = [];
	  this.state.attendances.map(att => {
		  membersList.map(mem => {
			  if (att.user_id === mem.uid) attendingMembers.push(mem)
		  })
	  })

	    this.setState({
        attendingMembers: attendingMembers
	  });
	
    });
  }

  render() {
    const { attendingMembers } = this.state;

    var membersArray = [];

    attendingMembers.map(member =>
      membersArray.push([
        member.firstName + " " + member.lastName,
        member.phoneNumber
      ])
    );

    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={10} md={8} lg={8}>
            <div align="center">
              <MUIDataTable
                title={"All Members Attending " + this.state.eventName}
                data={membersArray}
                columns={columns}
                options={options}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withFirebase(ViewEventAttendance);
