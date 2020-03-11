import React, { Component } from "react";

import TableCode from "../components/TableCode";

class CodePage extends Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="text-center">Daftar Code</h5>
        <hr />
        <TableCode />
      </React.Fragment>
    );
  }
}

export default CodePage;
