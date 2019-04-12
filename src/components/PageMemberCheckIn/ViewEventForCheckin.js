//import react & component
import React, { Component } from "react";
//import firebase
import { withFirebase } from "../Firebase";
//import routes constants for page urls
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
//import MUI table
import MUIDataTable from "mui-datatables";

//event table column headers
const columns = ["Name", "Date", "Time", "Description", ""];

//MUI table options
const options = {
  selectableRows: false,
  responsive: "scroll"
};

class ViewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  //on component mount, get events object from firebase db
  componentDidMount() {
    this.props.firebase.events().on("value", snapshot => {
      const eventsObject = snapshot.val();
      try {
        //map object into list using unique event uid
        const eventsList = Object.keys(eventsObject).map(key => ({
          ...eventsObject[key],
          uid: key
        }));
        //update state with new events list
        this.setState({
          events: eventsList,
        });
      } 
      catch {
        this.setState({
          event: null
        });
      }
    });
  }

  render() {
    const { events } = this.state;

    var eventsArray = [];

    //map events into array with specific data for our events table
    events.map(event =>
      eventsArray.push([
        event.eventName,
        event.eventStartDate,
        event.eventStartTime,
        event.eventDescription,
        <Link
          style={{ textDecoration: "none" }}
          to={{
            //link to event check in
            pathname: ROUTES.EVENT_CHECK_IN,
            state: {
              //passing parameter of event uid into next redirected page
              event_id: event.uid
            }
          }}
        >
          <Button size="large" color="primary" variant="contained">
            Sign In To Event
          </Button>
        </Link>
      ])
    );

    return (
      <div>
        <MUIDataTable
          title={"All Events"}
          data={eventsArray}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

export default withFirebase(ViewEvent);
