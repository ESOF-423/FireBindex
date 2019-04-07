import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

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

const EventRows = ({ events }) =>
  events.map(event => (
    <TableRow key={event.uid}>
      <TableCell>{event.eventName}</TableCell>
      <TableCell>{event.eventStartDate}</TableCell>
      <TableCell>{event.eventStartTime}</TableCell>
      <TableCell>{event.eventDescription}</TableCell>
      <TableCell>
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
      </TableCell>
    </TableRow>
  ));

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

        console.log(eventsList);
      } catch {
        this.setState({
          event: null
        });
      }
    });
  }

  render() {
    const { events, loading } = this.state;
    const { classes } = this.props;

    return (
      <div>
        {loading && <div>Loading ...</div>}
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Description</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <EventRows events={events} />
          </TableBody>
        </Table>
      </div>
    );
  }
}
ViewEvent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(withFirebase(ViewEvent)));
