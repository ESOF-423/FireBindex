//import react, component
import React, { Component } from "react";
//import firebase
import { withFirebase } from "../Firebase";
import Grid from "@material-ui/core/Grid";
//import MUI table
import MUIDataTable from "mui-datatables";

//MUI table column headers
const columns = ["Name", "Phone"];

//MUI options
const options = {
  selectableRows: false,
  responsive: "scroll"
};

class ViewEventAttendance extends Component {
  constructor(props) {
    super(props);
    //set state to initial variables
    this.state = {
      //passed into component via another page
      eventUID: this.props.location.state.eventUID,
      eventName: this.props.location.state.eventName,
      //holds all attendances that match event uid
      attendances: [],
      //holds all members attending specific event uid
      attendingMembers: []
    };
  }

  //on component mount, get all attendances from firebase
  componentDidMount() {
    this.props.firebase.attendances().on("value", snapshot => {
      const attendanceObject = snapshot.val();
      try {
        //create list via mapping from firebase attendance object
        const attendanceList = Object.keys(attendanceObject).map(key => ({
          ...attendanceObject[key],
          uid: key
        }));

        //filter only the attencances out that match event uid
        const attendances = attendanceList.filter(
          att => att.event_id === this.state.eventUID
        );
        //update state with newly made attendances list
        this.setState({
          attendances: attendances
		});
      }
      catch {
        this.setState({
          attendances: null
        });
      }
    });

    //get all members from db
    this.props.firebase.members().on("value", snapshot => {
      const membersObject = snapshot.val();

      //map members object into list via their uid
      const membersList = Object.keys(membersObject).map(key => ({
        ...membersObject[key],
        uid: key
      }));
      const attendingMembers = [];
      //filter out members, who's uid matches a uid from the attendance table of the specific event
      this.state.attendances.forEach(att => {
        membersList.forEach(mem => {
          if (att.user_id === mem.uid) attendingMembers.push(mem);
        });
      });
      //update state with members attending event
      this.setState({
        attendingMembers: attendingMembers
      });
    });
  }

  render() {
    const { attendingMembers } = this.state;

    var membersArray = [];
    //map attending menber data into array for display on the MUI table
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
