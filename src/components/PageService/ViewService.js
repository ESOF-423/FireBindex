import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import Button from "@material-ui/core/Button";
import MUIDataTable from "mui-datatables";

const columns = ["", "Name", "Date", "Time", "Description", ""];

const options = {
  selectableRows: false,
  responsive: "scroll"
};

class ViewService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
  }

  componentDidMount() {
    this.props.firebase.services().on("value", snapshot => {
      const servicesObject = snapshot.val();

      try {
        const servicesList = Object.keys(servicesObject).map(key => ({
          ...servicesObject[key],
          uid: key
        }));

        this.setState({
          services: servicesList,
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
    const { services } = this.state

    var servicesArray = [];

    services.map(service =>
      servicesArray.push([
        service.serviceName,
        service.serviceStartDate,
        service.serviceStartTime,
        service.serviceDescription,
        <Button
          type="submit"
          size="small"
          variant="contained"
          onClick={e => this.removeEvent(service.uid)}
        >
          Delete Service
        </Button>
      ])
    );

    return (
      <div>
        <MUIDataTable
          title={"All Services"}
          data={servicesArray}
          columns={columns}
          options={options}
        />
      </div >
    );
  }
}

export default withFirebase(ViewService);
