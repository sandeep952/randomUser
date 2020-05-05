import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CompleteUsers from "./components/CompleteUsers";
import IncompleteUsers from "./components/IncompleteUsers";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { getUsers } from "./helper/apiCalls";
import UpdateUser from "./components/UpdateUser";
class App extends Component {
  constructor() {
    super();
    this.state = {
      completeUsers: null,
      inCompleteUsers: null,
      userToUpdate:null,
    };
  }

  loadUser = (user)=>{
    let newState = {...this.state}
    newState.userToUpdate  = user
    this.setState({
      ...newState
    })
  }

  deleteUser = (uuidToDelete,list_name)=>{
    let newState= {...this.state}
    newState[list_name] = newState[list_name].filter((user)=>user.login.uuid!==uuidToDelete)
    this.setState({
      ...newState
    })

  }

  

  componentDidMount() {
    getUsers((users) => {
      this.setState({
        completeUsers: users[0],
        inCompleteUsers: users[1],
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid h-100">
          <Navbar />
          <div className="row h-100">
            <div className="col-md-8 border">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/completeids">
                  <CompleteUsers completeUsers={this.state.completeUsers} loadUser={this.loadUser} deleteUser={this.deleteUser}/>
                </Route>
                <Route path="/incompleteids">
                  <IncompleteUsers
                    inCompleteUsers={this.state.inCompleteUsers}
                    loadUser={this.loadUser}
                    deleteUser={this.deleteUser}
                  />
                </Route>
              </Switch>
            </div>
            <div className="col-md-4">{this.state.userToUpdate? <UpdateUser userToUpdate={this.state.userToUpdate}/> :"Select user to update"}</div>

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
