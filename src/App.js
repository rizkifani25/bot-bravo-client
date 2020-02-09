import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import TransaksiPage from "./pages/TransaksiPage";
import AdbPage from "./pages/AdbPage";
import ModulePage from "./pages/ModulePage";
import EditModulePage from "./pages/EditModulePage";
import CreateNewModulePage from "./pages/CreateNewModulePage";

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
                <Link to="/adbpage">ADB Setting</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">
                <Link to="/modulepage">Modules</Link>
              </div>
            </li>
          </ul>
          <div>
            <Route exact path="/" component={TransaksiPage} />
            <Route path="/adbpage" component={AdbPage} />
            <Route path="/modulepage" component={ModulePage} />
            <Route path="/editmodulepage" component={EditModulePage} />
            <Route path="/newmodulepage" component={CreateNewModulePage} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
