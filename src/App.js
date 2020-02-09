import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import TransaksiPage from "./pages/transaksi";
import DevicePage from "./pages/device";
import CodePage from "./pages/code";

require("dotenv").config();

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <ul className="nav">
            <li className="nav-item">
              <div className="nav-link active" href="#">
                <Link to="/">Riwayat Transaksi</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">
                <Link to="/device">Devices</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">
                <Link to="/code">Code</Link>
              </div>
            </li>
          </ul>
          <div>
            <Route exact path="/" component={TransaksiPage} />
            <Route path="/device" component={DevicePage} />
            <Route path="/code" component={CodePage} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
