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

const ServiceRows = ({ services }) =>
  services.map(service => (
    <TableRow>
      <TableCell>{service.serviceName}</TableCell>
      <TableCell>{service.serviceDate}</TableCell>
      <TableCell>{service.serviceStartTime}</TableCell>
      <TableCell>{service.serviceDescription}</TableCell>
    </TableRow>
  ));

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

  render() {
    const { services, loading } = this.state
    const { classes } = this.props;
    return (
      <div>
        <h2>All Services</h2>
        {loading && <div>Loading ...</div>}
        <Table className={classes.table}>
          <TableHead>
            <TableRow >
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            <ServiceRows services={services} />
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
