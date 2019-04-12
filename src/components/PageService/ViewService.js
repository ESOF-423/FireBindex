//import react, component
import React, { Component } from "react";
//import firebase
import { withFirebase } from "../Firebase";
import Button from "@material-ui/core/Button";
//import MUI table
import MUIDataTable from "mui-datatables";

//MUI table column headers
const columns = ["", "Name", "Date", "Time", "Description", ""];

const options = {
  selectableRows: false,
  responsive: "scroll"
};

//class viewservice
class ViewService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
  }

  //on component mount, get services object from firebase
  componentDidMount() {
    this.props.firebase.services().on("value", snapshot => {
      const servicesObject = snapshot.val();

      try {
        //map object into list 
        const servicesList = Object.keys(servicesObject).map(key => ({
          ...servicesObject[key],
          uid: key
        }));
        //update state with newly made list
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

  //remove service using unique id 
  removeService(sid) {    
    this.props.firebase.services().child(sid).remove();
  }

  render() {
    const { services } = this.state

    var servicesArray = [];

    //map services into array of specific data from services to display in MUI table
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
          onClick={e => this.removeService(service.uid)}
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
