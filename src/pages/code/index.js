import React, { Component } from "react";
import TableCode from "./components/TableCode";

import "./style.css";

class CodePage extends Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="text-center">List Code</h5>
        <hr />
        <TableCode />
      </React.Fragment>
    );
  }
}

export default CodePage;
