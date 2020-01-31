import React, { Component } from 'react'

import TableModule from '../components/TableModule'

class ModulePage extends Component {
    render() {
        return (
            <React.Fragment>
                <h5 className="text-center">Modules</h5>
                <hr />
                <TableModule />
            </React.Fragment>
        )
    }
}

export default ModulePage