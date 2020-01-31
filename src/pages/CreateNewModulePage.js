import React, { Component } from 'react';
// Testing
import '../css/form.css'
import '../css/button.css'
import { get } from '../api/api';

class CreateNewModulePage extends Component {
    constructor(props){
        super(props)

        this.state = {
            procedure: [],
            tmpCommand: "",
            tmpModuleName: "",
            tmpMethod: ""
        }
    }

    updateTempCommand = (evt) => {
        this.setState({
            tmpCommand: evt.target.value
        })
    }

    updateTempModuleName = (evt) => {
        this.setState({
            tmpModuleName: evt.target.value
        })
    }

    updateTempMethod = (evt) => {
        this.setState({
            tmpMethod: evt.target.value
        })
    }

    handleSaveChangesOnClick = () => {
        let temp =  this.state.procedure.concat(this.state.tmpCommand)
        this.setState({
            procedure: temp
        })
        console.log(this.state.tmpCommand + " " +this.state.tmpModuleName)
    }

    handleSaveChangesModulesOnClick = () => {
        const params = {
            moduleName: this.state.tmpModuleName,
            moduleMethod: this.state.tmpMethod,
            procedure: JSON.stringify(this.state.procedure)
        }

        get("/addNewModule", params)
            .then(data => {
                console.log(data)
            })
            .catch(errorMessage => {
                console.log(errorMessage)
            })
    }

    render() {
        let steps = this.state.procedure
        return (
            <React.Fragment>
                <div className="container custom-form">
                    <form>
                        <div className="form-group">
                            <input required type="text" className="form-control" id="moduleName" placeholder="Module Name" value={this.state.tmpModuleName} onChange={ evt => this.updateTempModuleName(evt)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formControlMethod">Method</label>
                            <select className="form-control" id="formControlMethod" onChange={evt => this.updateTempMethod(evt)}>
                                <option>ADB</option>
                                <option>Appium</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add New Step</button>
                        <button type="button" className="btn btn-success custom-button" onClick={() => this.handleSaveChangesModulesOnClick()}>Save Changes</button>
                        <hr />
                        <ul className="list-group">
                            {steps.length ? 
                                steps.map((step, i) => (
                                    <li key={i} className="list-group-item">{step}</li>
                                ))
                                :
                                (
                                    <li className="list-group-item">Empty</li>
                                )
                            }
                        </ul>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="modalNewStep">New Step</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label htmlFor="formControlMethod">Method</label>
                                            <select className="form-control" id="formControlMethod">
                                                <option>ADB</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formControlMethod">Command</label>
                                            <input required type="text" className="form-control" id="moduleName" placeholder="Command ADB" value={this.state.tmpCommand} onChange={ evt => this.updateTempCommand(evt)} />
                                        </div>
                                        {/* <div className="form-group">
                                            <label htmlFor="formControlMethod">Method</label>
                                            <select className="form-control" id="formControlMethod">
                                                <option>Tap</option>
                                                <option>Swipe</option>
                                                <option>KeyEvent</option>
                                                <option>SendKey</option>
                                            </select>
                                        </div> */}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.handleSaveChangesOnClick()}>Save changes</button>
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