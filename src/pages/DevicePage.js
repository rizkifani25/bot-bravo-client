import React, { Component } from "react";

import TableDevice from "../components/TableDevice";

class DevicePage extends Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="text-center">Daftar Device</h5>
        <hr />
        <TableDevice />
      </React.Fragment>
    );
  }
}

export default DevicePage;
