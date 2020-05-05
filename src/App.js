import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CompleteUsers from "./components/CompleteUsers";
import IncompleteUsers from "./components/IncompleteUSers";
import Navbar from "./components/Navbar";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Navbar/>
          <div className="row">
            <div className="col-md-8">
              <Switch>
                <Route path="/completeids">
                  <CompleteUsers />
                </Route>
                <Route path="/incompleteids">
                  <IncompleteUsers />
                </Route>
              </Switch>
            </div>

            <div className="col-md-4">update User column</div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
