import React, { Component } from 'react'

import TableTransaction from '../components/TableTransaction'

class TransaksiPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h5 className="text-center">Riwayat Transaksi</h5>
                <hr />
                <TableTransaction />
            </React.Fragment>
        )
    }
}

export default TransaksiPage