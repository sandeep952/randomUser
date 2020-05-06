import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CompleteUsers from "./components/CompleteUsers";
import IncompleteUsers from "./components/IncompleteUsers";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { getUsers } from "./helper/apiCalls";
import UpdateUser from "./components/UpdateUser";
import './App.css'
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      userToUpdate: null,
    };
  }

  loadUser = (user) => {
    let newState = { ...this.state };
    newState.userToUpdate = user;
    this.setState({
      ...newState,
    });
  };

  updateUser = (userDetails) => {
    let newState = { ...this.state };

    for (let i = 0; i < newState.users.length; i++) {
      if (newState.users[i].login.uuid === userDetails.login.uuid) {
        newState.users[i] = userDetails;
        break;
      }
    }

    this.setState({
      ...newState,
    });
  };

  deleteUser = (uuidToDelete) => {
    let newState = { ...this.state };
    newState.users = newState.users.filter(
      (user) => user.login.uuid !== uuidToDelete
    );

    this.setState({
      ...newState,
      userToUpdate: null,
    });
  };

  componentDidMount() {
    getUsers((users) => {
      this.setState({
        users: users,
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid ">
          <Navbar changeType={this.changeType} />
          <div className="row ">
            <div className="col-md-8 border">
              <div className="users-view">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>

                  <Route path="/completeids">
                    <CompleteUsers
                      users={this.state.users}
                      loadUser={this.loadUser}
                      deleteUser={this.deleteUser}
                    />
                  </Route>
                  <Route path="/incompleteids">
                    <IncompleteUsers
                      users={this.state.users}
                      loadUser={this.loadUser}
                      deleteUser={this.deleteUser}
                    />
                  </Route>
                </Switch>
              </div>
            </div>
            <div className="col-md-4">
              {this.state.userToUpdate ? (
                <UpdateUser
                  userToUpdate={this.state.userToUpdate}
                  updateUser={this.updateUser}
                />
              ) : (
                <h1>Click on name of user to update details</h1>
              )}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
