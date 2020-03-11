import React, { Component } from "react";
import { get } from "../api/api";

class TableDevice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      query: ""
    };
  }

  componentDidMount = () => {
    const params = {
      q: this.state.query,
      limit: this.state.limit
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

  handleDelete = deviceCode => {
    const params = {
      deviceCode: deviceCode
    };

    get("/deleteDevice", params)
      .then(data => {
        alert(data.data.message);
        this.componentDidMount();
      })
      .catch(data => {
        alert(data.data.message);
        this.componentDidMount();
      });
  };

  render() {
    let dbData = this.state.data;
    return (
      <React.Fragment>
        <div className="container">
          <div>
            <a
              className="btn btn-success"
              href="/addnewdevicepage"
              role="button"
            >
              Tambahkan Device
            </a>
          </div>
          <table className="table custom-table table-sm">
            <thead>
              <tr>
                <th scope="col">Device Code</th>
                <th scope="col">Device IP</th>
                <th scope="col">Device Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {dbData.length ? (
                dbData.map((data, i) => (
                  <tr key={i}>
                    <td>{data.deviceCode}</td>
                    <td>{data.deviceIP}</td>
                    <td>{data.deviceType}</td>
                    <td>
                      <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(data.deviceCode)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>-</td>
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
