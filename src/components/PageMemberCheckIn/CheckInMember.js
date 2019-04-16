// import react/firebase components
import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import PropTypes from "prop-types";

// import @material-ui components
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

//import MUIdata table
import MUIDataTable from "mui-datatables";

//Table column headers
const columns = ["Member Names", "Birthday", "Check In"];

//MUI table options
const options = {
  selectableRows: false,
  responsive: "scroll"
};

const styles = style => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: style.spacing.unit,
    marginRight: style.spacing.unit,
    width: 200
  },
  item: {
    padding: 24
  }
});

class CheckInMember extends Component {
  constructor(props) {
    super(props);

    //Set initial state
    this.state = {
      firstName: "",
      lastName: "",
      //set event to passed parameter from viewEventForCheckIn
      event_id: this.props.location.state,
      membersList: []
    };
  }

  //on component mounting, do:
  componentDidMount() {
    this.props.firebase.members().on("value", snapshot => {
      const membersObject = snapshot.val();

      //Create list of members from object from database, mapping with their key of uid
      const membersList = Object.keys(membersObject).map(key => ({
        ...membersObject[key],
        uid: key
      }));

      //update state with newly made members list
      this.setState({
        membersList: membersList
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.members().off();
    this.props.firebase.attendances().off();
  }

  //Called from buttons. Searches for member in db and then pushes into db attendance table
  onSubmit = nameArray => {
    var firstName = this.state.firstName;
    var lastName = this.state.lastName;
    const { event_id, membersList } = this.state;

    //submit() may be called without parameters.
    //check if param undefined; then use state firstName & lastName. Else use parameters
    if (
      typeof nameArray[0] !== "undefined" &&
      typeof nameArray[1] !== "undefined"
    ) {
      firstName = nameArray[0];
      lastName = nameArray[1];
    }
    //For every member in db, check if member exists such that firstname & lastname match
    for (var i = 0; i < membersList.length; i++) {
      if (
        membersList[i].firstName.toLowerCase() === firstName.toLowerCase() &&
        membersList[i].lastName.toLowerCase() === lastName.toLowerCase() &&
        event_id.event_id !== ""
      ) {
        //Create attendance using member uid and event uid
        const attendance = {
          user_id: membersList[i].uid,
          event_id: event_id.event_id
        };
        //push to db
        this.props.firebase.attendances().push(attendance);
        //display success message
        document.getElementById("successMessage").innerHTML =
          "Success! " + firstName + " " + lastName + " is checked in!";
        break;
      } else {
        document.getElementById("successMessage").innerHTML =
          "Member not found in database, try again";
      }
    }
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { firstName, lastName, membersList } = this.state;
    const { classes } = this.props;

    var membersArray = [];

    //map all db members so we can display list to choose from
    membersList.map(member =>
      membersArray.push([
        member.firstName + " " + member.middleName + " " + member.lastName,
        member.birthday,
        <Button
          type="submit"
          size="large"
          variant="contained"
          color="secondary"
          onClick={
            e => this.onSubmit([member.firstName, member.lastName])
            //calls onSubmit with parameters
          }
        >
          Check In
        </Button>
      ])
    );

    return (
      <div>
        <Grid container>
          <Grid item className={classes.item} xs={12} sm={12} md={4} lg={4}>
            <div align="center">
              <Card>
                <CardHeader title="Sign in With Your First and Last Name" />
                <CardContent>
                  <form classname={classes.container} onSubmit={this.onSubmit}>
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
                      color="secondary"
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
          <Grid item className={classes.item} xs={12} sm={12} md={8} lg={8}>
            <MUIDataTable
              title={"Or Find You Name Below"}
              data={membersArray}
              columns={columns}
              options={options}
            />
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
