import React, { Component } from "react";
import { withFirebase } from "../Firebase";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class CheckInMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      event_id: this.props.location.state
    };
  }

  onSubmit = event => {
    const { firstName, lastName, event_id } = this.state;
    console.log("hello");
    console.log(event_id);

    this.props.firebase.members().on("value", snapshot => {
      const membersObject = snapshot.val();

      const membersList = Object.keys(membersObject).map(key => ({
        ...membersObject[key],
        uid: key
      }));

      //   console.log(membersList)

      for (var i = 0; i < membersList.length; i++) {
        console.log("in the loooooooop");
        if (
          membersList[i].firstName.toLowerCase() === firstName.toLowerCase() &&
          membersList[i].lastName.toLowerCase() === lastName.toLowerCase() &&
          event_id.event_id !== ""
        ) {
          console.log("MATCH");

          const attendance = {
            user_id: membersList[i].uid,
            event_id: event_id.event_id
          };

          console.log(attendance);
          this.props.firebase.attendances().push(attendance);
          document.getElementById("successMessage").innerHTML = "Sucesss!";
          break
        } else {
          document.getElementById("successMessage").innerHTML =
            "Member not found in database, try again";
        }
      }
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { firstName, lastName } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <div align="center" style={{ marginTop: "20px" }}>
              <Card>
                <CardHeader
                  title="Sign in to Event"
                  subheader="Sign in with your first and last name"
                />
                <CardContent>
                  <form onSubmit={this.onSubmit}>
                    <TextField
                      classname={classes.textField}
                      margin="normal"
                      name="firstName"
                      value={firstName}
                      onChange={this.onChange}
                      type="text"
                      label="First Name"
                      fullWidth
                      required
                    />
                    <TextField
                      classname={classes.textField}
                      margin="normal"
                      name="lastName"
                      value={lastName}
                      onChange={this.onChange}
                      type="text"
                      label="Last Name"
                      fullWidth
                      required
                    />
                    <Button
                      type="button"
                      onClick={this.onSubmit}
                      size="large"
                      color="primary"
                      variant="contained"
                    >
                      Check In
                    </Button>
                    <div id="successMessage" />
                  </form>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CheckInMember.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(CheckInMember));
