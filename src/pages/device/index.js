import React, { Component } from "react";
import TableDevice from "./components/TableDevice";

import "./style.css";

class DevicePage extends Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="text-center">List Device</h5>
        <hr />
        <TableDevice />
      </React.Fragment>
    );
  }
}

export default DevicePage;
