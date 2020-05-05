import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CompleteUsers from "./components/CompleteUsers";
import IncompleteUsers from "./components/IncompleteUSers";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { getUsers } from "./helper/apiCalls";
class App extends Component {
  constructor() {
    super();
    this.state = {
      completeUsers: null,
      inCompleteUsers: null,
      
    };
  }

  componentDidMount() {
    getUsers((users)=>{
      this.setState({
        completeUsers: users[0],
        inCompleteUsers: users[1],
        
      })

    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
          <div className="row">
            <div className="col-md-8">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/completeids">
                  <CompleteUsers completeUsers={this.state.completeUsers} />
                </Route>
                <Route path="/incompleteids">
                  <IncompleteUsers inCompleteUsers={this.state.inCompleteUsers}/>
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
