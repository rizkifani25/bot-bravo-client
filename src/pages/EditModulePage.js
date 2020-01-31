import React, { Component } from 'react';

class EditModulePage extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: this.props.location.state.data
        }
    }

    handleUpdateOnClick = () => {
        console.log(this.state.data)
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                <form className="col s12 m4 l4">
                    <input placeholder="Task" />
                    <button type="submit">Add Task</button>
                </form>
                </div>
                <button onClick={ () => this.handleUpdateOnClick() }>Update</button>
            </React.Fragment>
        );
    }
}

export default EditModulePage;