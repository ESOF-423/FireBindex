// import react/firebase components
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import MUIDataTable from "mui-datatables";

// import @material-ui components
import Button from "@material-ui/core/Button";

// import routes
import * as ROUTES from "../../constants/routes";

// defines the headers of the columns in the table
const columns = ["", "Name", "Date", "Time", "Description", ""];

// defines the options for the table
const options = {
  selectableRows: false,
  responsive: "scroll"
};

// class to view all the events in the database
class ViewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  // function runs when page renders to get all events in the database
  componentDidMount() {
    this.props.firebase.events().on("value", snapshot => {
      const eventsObject = snapshot.val();

      try {
        const eventsList = Object.keys(eventsObject).map(key => ({
          ...eventsObject[key],
          uid: key
        }));

        this.setState({
          events: eventsList
        });
      } catch {
        this.setState({
          events: null
        });
      }
    });
  }

  // function to delete an event
  removeEvent(eid) {
    this.props.firebase
      .events()
      .child(eid)
      .remove();
  }

  render() {
    const { events } = this.state;

    var eventsArray = [];

    // maps the event JSON object to an array for the table
    events.map(event =>
      eventsArray.push([
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: ROUTES.EVENT_VIEW_ATTENDANCE,
            state: {
              eventUID: event.uid,
              eventName: event.eventName
            }
          }}
        >
          <Button
            type="submit"
            color="primary"
            size="small"
            variant="contained"
          >
            View Attendance
          </Button>
        </Link>,
        event.eventName,
        event.eventStartDate,
        event.eventStartTime,
        event.eventDescription,
        <Button
          type="submit"
          size="small"
          variant="contained"
          onClick={e => this.removeEvent(event.uid)}
        >
          Delete Event
        </Button>
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
