import React, { Component } from "react";

import { get } from "../api/api";

class AddNewDevicePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deviceCode: "",
      deviceIP: "",
      deviceType: ""
    };
  }

  updateDeviceCode = evt => {
    this.setState({
      deviceCode: evt.target.value
    });
  };

  updateDeviceIP = evt => {
    this.setState({
      deviceIP: evt.target.value
    });
  };

  updateDeviceType = evt => {
    this.setState({
      deviceType: evt.target.value
    });
  };

  handleSave = () => {
    const params = {
      deviceCode: this.state.deviceCode,
      deviceIP: this.state.deviceIP,
      deviceType: this.state.deviceType
    };

    get("/addDevice", params)
      .then(data => {
        alert(data.data.message);
      })
      .catch(data => {
        alert(data.data.message);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="container custom-form">
            <div className="form-group">
              <label htmlFor="inputDeviceCode">Device Code</label>
              <input
                type="text"
                className="form-control"
                id="inputDeviceCode"
                placeholder="Masukkan Device Code"
                value={this.state.deviceCode}
                onChange={evt => this.updateDeviceCode(evt)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputDeviceIP">Device IP</label>
              <input
                type="text"
                className="form-control"
                id="inputDeviceIP"
                placeholder="Masukkan Device IP"
                value={this.state.deviceIP}
                onChange={evt => this.updateDeviceIP(evt)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputDeviceType">Device Type</label>
              <input
                type="text"
                className="form-control"
                id="inputDeviceType"
                placeholder="Masukkan Device Type"
                value={this.state.deviceType}
                onChange={evt => this.updateDeviceType(evt)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => this.handleSave()}
            >
              Tambahkan Device
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddNewDevicePage;
