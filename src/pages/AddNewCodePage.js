import React, { Component } from "react";

import { get } from "../api/api";

class AddNewCodePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Code: "",
      Name: ""
    };
  }

  updateCode = evt => {
    this.setState({
      Code: evt.target.value
    });
  };

  updateName = evt => {
    this.setState({
      Name: evt.target.value
    });
  };

  handleSave = () => {
    const params = {
      code: this.state.Code,
      name: this.state.Name
    };

    get("/addCode", params)
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
              <label htmlFor="inputCode">Code</label>
              <input
                type="text"
                className="form-control"
                id="inputCode"
                placeholder="Masukkan Code"
                value={this.state.Code}
                onChange={evt => this.updateCode(evt)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Masukkan Name"
                value={this.state.Name}
                onChange={evt => this.updateName(evt)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => this.handleSave()}
            >
              Tambahkan Code
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddNewCodePage;
