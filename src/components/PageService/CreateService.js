import React, { Component } from "react";
import { withFirebase } from "../Firebase";

const INITIAL_STATE = {
  serviceName: "",
  serviceStartDate: "",
  serviceEndDate: "",
  serviceStartTime: "",
  serviceEndTime: "",
  serviceDescription: ""
};

class CreateService extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = service => {
    this.setState({ [service.target.name]: service.target.value });
  };

  onSubmit = service => {
    this.props.firebase.services().push(this.state);
  };

  render() {
    const {
      serviceName,
      serviceStartDate,
      serviceEndDate,
      serviceStartTime,
      serviceEndTime,
      serviceDescription
    } = this.state;

    const isInvalid =
      serviceDescription === "" ||
      serviceEndDate === "" ||
      serviceEndTime === "" ||
      serviceName === "" ||
      serviceStartDate === "" ||
      serviceStartTime === "";

    return (
      <div>
        <h2>Create Service</h2>
        <form onSubmit={this.onSubmit}>
          <input
            name="serviceName"
            value={serviceName}
            type="text"
            onChange={this.onChange}
            placeholder="Name"
          />
          <br />
          <input
            name="serviceStartDate"
            value={serviceStartDate}
            type="date"
            onChange={this.onChange}
            placeholder="Start Date"
          />
          <input
            name="serviceEndDate"
            value={serviceEndDate}
            type="date"
            onChange={this.onChange}
            placeholder="End Date"
          />
          <br />
          <input
            name="serviceStartTime"
            value={serviceStartTime}
            type="time"
            onChange={this.onChange}
            placeholder="Start Time"
          />
          <br />
          <input
            name="serviceEndTime"
            value={serviceEndTime}
            type="time"
            onChange={this.onChange}
            placeholder="End Time"
          />
          <input
            name="serviceDescription"
            value={serviceDescription}
            type="text"
            onChange={this.onChange}
            placeholder="Description"
          />
          <br />
          <button disabled={isInvalid} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default withFirebase(CreateService);
