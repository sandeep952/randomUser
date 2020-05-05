import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CompleteUsers from "./components/CompleteUsers";
import IncompleteUsers from "./components/IncompleteUSers";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <Route path="/completeids">
                <CompleteUsers />
              </Route>
              <Route path="/incompleteids">
                <IncompleteUsers />
              </Route>
            </div>

            <div className="col-md-4">update User column</div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
