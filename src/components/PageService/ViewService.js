import React, { Component } from "react";
import { withFirebase } from "../Firebase";

const tableStyle = {
  textAlign: 'left',
  width: "100%"
};

const ServiceRows = ({ services }) =>
  services.map(service => (
    <tr>
      <td>{service.serviceName}</td>
      <td>{service.serviceDate}</td>
      <td>{service.serviceStartTime}</td>
      <td>{service.serviceDescription}</td>
    </tr>
  ));

class ViewService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.services().on("value", snapshot => {
      const servicesObject = snapshot.val();

      const servicesList = Object.keys(servicesObject).map(key => ({
        ...servicesObject[key],
        uid: key
      }));

      this.setState({
        services: servicesList,
      });

      this.catch(error => {
        this.setState({ error });
      });

      console.log(servicesList);
    });

  }

  render() {
    const { services } = this.state
    return (
      <div>
        <h2>All Services</h2>
        <table>
          <tbody>
            <tr style={tableStyle}>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Description</th>
            </tr>
            <ServiceRows services={services} />
          </tbody>
        </table>
      </div >
    );
  }
}
export default withFirebase(ViewService);
