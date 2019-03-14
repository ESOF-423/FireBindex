import React, { Component } from "react";
import { withFirebase } from "../Firebase";

const tableStyle = {
  textAlign: 'left',
  width: "100%"
};

const EventRows = ({ events }) =>
  events.map(event => (
    <tr>
      <td>{event.eventName}</td>
      <td>{event.eventDate}</td>
      <td>{event.eventStartTime}</td>
      <td>{event.eventDescription}</td>
    </tr>
  ));

class ViewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        });

        console.log(eventsList);
      }
      catch {
        this.setState({
          event: null
        });
      }
    });


  }

  render() {
    const { events } = this.state
    return (
      <div>
        <h2>All Events</h2>
        <table>
          <tbody>
            <tr style={tableStyle}>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Description</th>
            </tr>
            <EventRows events={events} />
          </tbody>
        </table>
      </div >
    );
  }
}
export default withFirebase(ViewEvent);
