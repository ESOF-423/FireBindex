import React, { Component } from "react";
import { withFirebase } from "../Firebase";

const tableStyle = {
  textAlign: 'left'
};

class ViewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: "",
    };
  }
  componentDidMount() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
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
