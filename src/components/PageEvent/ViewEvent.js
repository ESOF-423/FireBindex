import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import Button from "@material-ui/core/Button";
import MUIDataTable from "mui-datatables";
import * as ROUTES from "../../constants/routes";

const columns = ["", "Name", "Date", "Time", "Description", ""];

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

  removeEvent(eid) {
    this.props.firebase
      .events()
      .child(eid)
      .remove();
  }

  render() {
    const { events } = this.state;

    var eventsArray = [];

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
