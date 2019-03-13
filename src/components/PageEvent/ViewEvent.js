import React, { Component } from "react";
import { withFirebase } from "../Firebase";

const tableStyle = {
  textAlign: 'left'
};

class ViewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
    };
  }
  componentDidMount() {
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear(); 
    this.setState({
      date: month + "/" + date + "/" + year
    });

  }

  render() {
    return (
      <div>
        <h2>All Events</h2>
        <table>
          <tr style={tableStyle}>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>eventName</td>
            <td>eventStartDate</td>
            <td>eventStateTime</td>
            <td>eventDescription</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default withFirebase(ViewEvent);
