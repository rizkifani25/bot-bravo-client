import React, { Component } from "react";
// Testing
import "../css/form.css";
import "../css/button.css";
import { get } from "../api/api";

class CreateNewModulePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      procedure: "",
      tmpCommand: "Tap",
      tmpModuleName: "",
      tmpMethod: "ADB",
      xCoordinate: "0",
      yCoordinate: "0",
      duration: "500",
      x2Coordinate: "0",
      y2Coordinate: "0",
      swipeDuration: "500",
      key: "3",
      device: "",
      textInput: "",
      inputFor: ""
    };
  }

  updateTempCommand = evt => {
    this.setState({
      tmpCommand: evt.target.value
    });
  };

  updateTempModuleName = evt => {
    this.setState({
      tmpModuleName: evt.target.value
    });
  };

  updateTempMethod = evt => {
    this.setState({
      tmpMethod: evt.target.value
    });
  };

  updateXCoor = evt => {
    this.setState({
      xCoordinate: evt.target.value
    });
  };

  updateYCoor = evt => {
    this.setState({
      yCoordinate: evt.target.value
    });
  };

  updateX2Coor = evt => {
    this.setState({
      x2Coordinate: evt.target.value
    });
  };

  updateY2Coor = evt => {
    this.setState({
      y2Coordinate: evt.target.value
    });
  };

  updateDuration = evt => {
    this.setState({
      duration: evt.target.value
    });
  };

  updateSwipeDuration = evt => {
    this.setState({
      swipeDuration: evt.target.value
    });
  };

  updateKey = evt => {
    this.setState({
      key: evt.target.value
    });
  };

  updateDevice = evt => {
    this.setState({
      device: evt.target.value
    });
  };

  updateTextInput = evt => {
    this.setState({
      textInput: evt.target.value
    });
  };

  updateInputFor = evt => {
    this.setState({
      inputFor: evt.target.value
    });
  };

  handleChangesCommand = command => {
    if (this.state.tmpCommand === "Tap") {
      return (
        <div>
          <form>
            <div className="form-group">
              <label>X Coordinate</label>
              <input
                required
                type="text"
                className="form-control"
                id="coorX"
                placeholder="Coor X; Default 0"
                value={this.state.xCoordinate}
                onChange={evt => this.updateXCoor(evt)}
              />
              <label>Y Coordinate</label>
              <input
                required
                type="text"
                className="form-control"
                id="coorY"
                placeholder="Coor Y; Default 0"
                value={this.state.yCoordinate}
                onChange={evt => this.updateYCoor(evt)}
              />
              <label>Process Duration</label>
              <input
                required
                type="text"
                className="form-control"
                id="processDur"
                placeholder="Duration; Default 500ms"
                value={this.state.duration}
                onChange={evt => this.updateDuration(evt)}
              />
            </div>
          </form>
        </div>
      );
    } else if (this.state.tmpCommand === "Swipe") {
      return <div>Swipe</div>;
    } else if (this.state.tmpCommand === "Input") {
      return <div>Input</div>;
    } else if (this.state.tmpCommand === "KeyEvent") {
      return <div>KeyEvent</div>;
    } else if (this.state.tmpCommand === "OpenWeb") {
      return <div>OpenWeb</div>;
    } else if (this.state.tmpCommand === "Clipper") {
      return <div>Clipper</div>;
    }
  };

  handleSaveChangesOnClick = () => {
    let temp = this.state.tmpModuleName.toLowerCase().replace(" ", "-");
    this.setState({
      procedure: temp
    });
  };

  handleSaveChangesModulesOnClick = () => {
    const params = {
      moduleName: this.state.tmpModuleName,
      moduleMethod: this.state.tmpMethod,
      moduleInfo: "Testing",
      procedure: this.state.procedure
    };

    get("/addNewModule", params)
      .then(data => {
        console.log(data);
      })
      .catch(errorMessage => {
        console.log(errorMessage);
      });
  };

  render() {
    let steps = this.state.procedure;
    return (
      <React.Fragment>
        <div className="container custom-form">
          <form>
            <div className="form-group">
              <input
                required
                type="text"
                className="form-control"
                id="moduleName"
                placeholder="Module Name"
                value={this.state.tmpModuleName}
                onChange={evt => this.updateTempModuleName(evt)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formControlMethod">Method</label>
              <select
                className="form-control"
                id="formControlMethod"
                onChange={evt => this.updateTempMethod(evt)}
              >
                <option>ADB</option>
                <option>Appium</option>
              </select>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Add New Step
            </button>
            <button
              type="button"
              className="btn btn-success custom-button"
              onClick={() => this.handleSaveChangesModulesOnClick()}
            >
              Save Changes
            </button>
            <hr />
            <ul className="list-group">
              {steps.length ? (
                steps.map((step, i) => (
                  <li key={i} className="list-group-item">
                    {step}
                  </li>
                ))
              ) : (
                <li className="list-group-item">Empty</li>
              )}
            </ul>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalNewStep">
                      New Step
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="formControlMethod">
                        Method : {this.state.tmpMethod}
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="formControlMethod">Command</label>
                      <select
                        className="form-control"
                        id="formControlMethod"
                        onChange={evt => this.updateTempCommand(evt)}
                      >
                        <option>Tap</option>
                        <option>Swipe</option>
                        <option>Input</option>
                        <option>KeyEvent</option>
                        <option>OpenWeb</option>
                        <option>Clipper</option>
                      </select>
                      {this.handleChangesCommand(this.state.tmpCommand)}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={() => this.handleSaveChangesOnClick()}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateNewModulePage;
