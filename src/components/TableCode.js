import React, { Component } from "react";
import { get } from "../api/api";

class TableCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      query: ""
    };
  }

  componentDidMount = () => {
    const params = {
      q: this.state.query
    };

    get("/allCode", params)
      .then(data => {
        this.setState({
          data: data["data"]
        });
      })
      .catch(errorMessage => {
        console.log(errorMessage);
      });
  };

  handleDelete = codeName => {
    const params = {
      name: codeName
    };

    get("/deleteCode", params)
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
            <a className="btn btn-success" href="/addnewcodepage" role="button">
              Tambahkan Code
            </a>
          </div>
          <table className="table custom-table table-sm">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {dbData.length ? (
                dbData.map((data, i) => (
                  <tr key={i}>
                    <td>{data.Code}</td>
                    <td>{data.Name}</td>
                    <td>
                      <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(data.Name)}
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
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default TableCode;
