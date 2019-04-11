import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import MUIDataTable from "mui-datatables";

import * as ROUTES from "../../constants/routes";

const columns = ["", "Name", "Date", "Time", "Description", ""];

const options = {
  selectableRows: false,
  // resizableColumns: true,
  responsive: "scroll"
};

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class ViewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      events: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.events().on("value", snapshot => {
      const eventsObject = snapshot.val();

      try {
        const eventsList = Object.keys(eventsObject).map(key => ({
          ...eventsObject[key],
          uid: key
        }));

        this.setState({
          events: eventsList,
          loading: false
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
    const { events, loading } = this.state;
    const { classes } = this.props;

    // var eventsArray = getEventsArray(events);

    var eventsArray = [];

    events.map(event => eventsArray.push([
      <Link
        to={{
          pathname: ROUTES.EVENT_VIEW_ATTENDANCE,
          state: { 
            eventUID: event.uid,
            eventName: event.eventName
          }
        }}>
        <Button 
          type="submit"
          color= "primary"
          size= "small"
          variant= "contained"          
        >
          View Attendance
        </Button>
      </Link>,
      event.eventName,
      event.eventStartDate,
      event.eventStartTime,
      event.eventDescription,      
      <Button
        type="submit" onClick={e => this.removeEvent(event.uid)}
        color= "primary"
        size= "small"
        variant= "contained"          
      >
        Delete Event
      </Button>
    ]))

    return (
      <div>
        <MUIDataTable
          title={"All Events"}
          data={eventsArray}
          columns={columns}
          options={options}
        />
        {loading && <div>Loading ...</div>}      
      </div>
    );
  }
}
ViewEvent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(ViewEvent));
