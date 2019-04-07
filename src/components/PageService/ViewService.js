import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import PropTypes from 'prop-types';


import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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

class ViewService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      services: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.services().on("value", snapshot => {
      const servicesObject = snapshot.val();

      try {
        const servicesList = Object.keys(servicesObject).map(key => ({
          ...servicesObject[key],
          uid: key
        }));

        this.setState({
          services: servicesList,
          loading:false
        });
        console.log(servicesList);
      }
      catch {
        this.setState({
          service: null
        });
      }      
    });
  }

  removeService(sid) {    
    this.props.firebase.services().child(sid).remove();
  }  

  render() {
    const { services, loading } = this.state
    const { classes } = this.props
    return (
      <div>
        {loading && <div>Loading ...</div>}
        <Table className={classes.table}>
          <TableHead>
            <TableRow >
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Description</TableCell>
              <TableCell></TableCell>              
            </TableRow>
            </TableHead>
            <TableBody>            
              {services.map(service => (
                <TableRow>
                  <TableCell>{service.serviceName}</TableCell>
                  <TableCell>{service.serviceStartDate}</TableCell>
                  <TableCell>{service.serviceStartTime}</TableCell>
                  <TableCell>{service.serviceDescription}</TableCell>
                  <TableCell><button type="submit"  onClick={
                    (e) => this.removeService(service.uid)}>
                    Delete Service</button>
                  </TableCell>
                </TableRow>))}
            </TableBody>
        </Table>
      </div >
    );
  }
}

ViewService.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withFirebase(ViewService));
