import React, { Component } from "react";
import { get } from "../../../api/api";

import "../style.css";

class TableDevice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      query: ""
    };
  }

  updateQuery = evt => {
    this.setState({
      query: evt.target.value
    });
  };

  componentDidMount = () => {
    const params = {
      q: this.state.query
    };

    get("/allDevice", params)
      .then(data => {
        this.setState({
          data: data["data"]
        });
      })
      .catch(errorMessage => {
        console.log(errorMessage);
      });
  };

  onSearchPress = event => {
    let code = event.keyCode || event.which;
    if (code === 13) {
      const params = {
        q: this.state.query
      };

      get("/allDevice", params)
        .then(data => {
          this.setState({
            data: data["data"]
          });
        })
        .catch(errorMessage => {
          console.log(errorMessage);
        });
    }
  };

  render() {
    let dbData = this.state.data;
    return (
      <React.Fragment>
        <div className="container">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Device"
              aria-label="Search"
              value={this.state.query}
              onChange={evt => this.updateQuery(evt)}
              onKeyPress={this.onSearchPress.bind(this)}
            />
          </form>
          <table className="table custom-table table-sm">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">IP</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              {dbData.length ? (
                dbData.map((data, i) => (
                  <tr key={i}>
                    <td>{data.deviceCode}</td>
                    <td>{data.deviceIP}</td>
                    <td>{data.deviceType}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default TableDevice;
