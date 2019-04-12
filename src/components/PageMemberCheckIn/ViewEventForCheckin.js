import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MUIDataTable from "mui-datatables";

const columns = ["Name", "Date", "Time", "Description", ""];

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
          events: eventsList,
        });

        console.log(eventsList);
      } catch {
        this.setState({
          event: null
        });
      }
    });
  }

  render() {
    const { events } = this.state;

    var eventsArray = [];

    events.map(event =>
      eventsArray.push([
        event.eventName,
        event.eventStartDate,
        event.eventStartTime,
        event.eventDescription,
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: ROUTES.EVENT_CHECK_IN,
            state: {
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
