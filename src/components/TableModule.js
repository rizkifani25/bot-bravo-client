import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { get } from '../api/api'

class TableModule extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: [],
            query: "",
            isEdit: false,
            isCreate: false
        }
    }

    updateTable = () => {
        const params = {
            q: this.state.query
        }

        get("/allModules", params)
            .then(data => {
                this.setState({
                    data: data.data
                })       
            })
            .catch(errorMessage => {
                console.log(errorMessage)
            })
    }

    componentDidMount = () => {
        const params = {
            q: this.state.query
        }

        get("/allModules", params)
            .then(data => {
                this.setState({
                    data: data.data
                })       
            })
            .catch(errorMessage => {
                console.log(errorMessage)
            })
    }

    handleEditOnClick = (moduleName) => {
        const params = {
            q: moduleName
        }

        get("/allModules", params)
            .then(data => {
                this.setState({
                    data: data['data'][0],
                    isEdit: true
                })
                console.log(this.state.data)
            })
            .catch(errorMessage => {
                console.log(errorMessage)
            })
    }

    handleDeleteOnClick = (moduleName) => {
        const params = {
            moduleName: moduleName
        }

        get("/deleteModule", params)
            .then(response => {
                this.updateTable()
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleAddNewOnClick = () => {
        this.setState({
            isCreate: true
        })
    }

    render() {
        if(this.state.isEdit){
            return <Redirect to={{
                pathname: '/editmodulepage',
                state: {
                    data: this.state.data
                }
            }} />
        }else if(this.state.isCreate){
            return <Redirect to={{
                pathname: '/newmodulepage',
            }} />
        }else{
            let dbData = this.state.data
            return (
                <React.Fragment>
                    <div className="container">
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th>ModuleName</th>
                                    <th>Method</th>
                                    <th>Info</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dbData.length ? 
                                    dbData.map((data, i) => (
                                        <tr key={i}>
                                            <td>{data.moduleName}</td>
                                            <td>{data.moduleMethod}</td>
                                            <td>{data.moduleInfo}</td>
                                            <td>
                                                <button className="btn btn-outline-success rounded-circle" onClick={ () => this.handleEditOnClick(data.moduleName)}>
                                                    <ion-icon name="create"></ion-icon>
                                                </button>
                                                <button className="btn btn-outline-danger rounded-circle" onClick={ () => this.handleDeleteOnClick(data.moduleName)}>
                                                    <ion-icon name="trash"></ion-icon>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                    : 
                                    (<tr>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>)
                                    }
                            </tbody>
                        </table>
                        <div>
                            <br/>
                            <button className="btn btn-success rounded-circle" name="action" onClick={ () => this.handleAddNewOnClick() }>
                                <ion-icon name="add"></ion-icon>
                            </button>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default TableModule