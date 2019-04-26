// import react components
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import material-ui components
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// import custom components
import { withAuthorization } from "../Session";

// import icons
import event_available from "../../assets/icons/baseline_event_available_black_48dp.png";
import event from "../../assets/icons/baseline_event_black_48dp.png";
import person from "../../assets/icons/baseline_person_black_48dp.png";
import room_service from "../../assets/icons/baseline_room_service_black_48dp.png";
import account_box from "../../assets/icons/baseline_account_box_black_48dp.png"

// import routes
import * as ROUTES from "../../constants/routes";

const condition = authUser => !!authUser;

const styles = {
  root: {
    textAlign: "center",
    margin: 24,
    paddingTop: 24,
    paddingBottom: 24
  },
  button: {
    fontSize: 20
  },
  link: {
    textDecoration: "none"
  }
};

function HomePage(props) {
  const { classes } = props;
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Link className={classes.link} to={ROUTES.MEMBER_CHECK_IN}>
          <Paper className={classes.root} elevation={1}>
            <img alt="Check Into an Event" className={classes.media} src={event_available} />
            <br />
            <Button className={classes.button} size="large" color="primary">
              Check Into an Event
            </Button>
          </Paper>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Link className={classes.link} to={ROUTES.MEMBER}>
          <Paper className={classes.root} elevation={1}>
            <img alt="Members" className={classes.media} src={person} />
            <br />
            <Button className={classes.button} size="large" color="primary">
              Members
            </Button>
          </Paper>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Link className={classes.link} to={ROUTES.EVENT}>
          <Paper className={classes.root} elevation={1}>
            <img alt="Events" className={classes.media} src={event} />
            <br />
            <Button className={classes.button} size="large" color="primary">
              Events
            </Button>
          </Paper>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Link className={classes.link} to={ROUTES.SERVICE}>
          <Paper className={classes.root} elevation={1}>
            <img alt="Services" className={classes.media} src={room_service} />
            <br />
            <Button className={classes.button} size="large" color="primary">
              Services
            </Button>
          </Paper>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Link className={classes.link} to={ROUTES.ACCOUNT}>
          <Paper className={classes.root} elevation={1}>
            <img alt="Manage my Admin Account" className={classes.media} src={account_box} />
            <br />
            <Button className={classes.button} size="large" color="primary">
              Manage my Admin Account
            </Button>
          </Paper>
        </Link>
      </Grid>
    </Grid>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withAuthorization(condition)(HomePage));
