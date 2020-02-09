import React, { Component } from "react";
import { get } from "../api/api";

import "../css/table.css";

class TableTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      query: "",
      limit: 50
    };
  }

  updateQuery = evt => {
    this.setState({
      query: evt.target.value
    });
  };

  updateLimit = evt => {
    this.setState({
      limit: evt.target.value
    });
  };

  componentDidMount = () => {
    const params = {
      q: this.state.query,
      limit: this.state.limit
    };

    get("/allTransaction", params)
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
        q: this.state.query,
        limit: this.state.limit
      };

      get("/allTransaction", params)
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
              placeholder="Transaksi ID"
              aria-label="Search"
              value={this.state.query}
              onChange={evt => this.updateQuery(evt)}
              onKeyPress={this.onSearchPress.bind(this)}
            />
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Limit"
              aria-label="Search"
              value={this.state.limit}
              onChange={evt => this.updateLimit(evt)}
              onKeyPress={this.onSearchPress.bind(this)}
            />
          </form>
          <table className="table custom-table table-sm">
            <thead>
              <tr>
                <th scope="col">trxId</th>
                <th scope="col">trxCode</th>
                <th scope="col">trxTo</th>
                <th scope="col">trxNominal</th>
                <th scope="col">trxSN</th>
                <th scope="col">trxStatus</th>
                <th scope="col">trxDate</th>
                <th scope="col">trxInfo</th>
              </tr>
            </thead>
            <tbody>
              {dbData.length ? (
                dbData.map((data, i) => (
                  <tr key={i}>
                    <td>{data.trxId}</td>
                    <td>{data.trxCode}</td>
                    <td>{data.trxTo}</td>
                    <td>{data.trxNominal}</td>
                    <td>{data.trxSN}</td>
                    <td>{data.trxStatus}</td>
                    <td>{data.trxDate}</td>
                    <td>{data.trxInfo}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
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

export default TableTransaction;
