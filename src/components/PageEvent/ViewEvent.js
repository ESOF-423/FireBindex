import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import MUIDataTable from "mui-datatables";

const columns = ["Name", "Date", "Time", "Description", ""];

const options = {
  selectableRows: false
};

import * as ROUTES from "../../constants/routes";

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
    // console.log(eid);
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
      event.eventName,
      event.eventStartDate,
      event.eventStartTime,
      event.eventDescription,
      <Button type="submit" onClick={e => this.removeEvent(event.uid)}>
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
