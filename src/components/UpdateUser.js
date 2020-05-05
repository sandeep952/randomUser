import React, { Component } from "react";

class UpdateUser extends Component {
  constructor(props) {
    super(props);
      this.state = {
        email: props.userToUpdate.email,
        age: props.userToUpdate.dob.age,
        phone: props.userToUpdate.phone,
      }
  }

  componentDidUpdate = (prevProps)=>{
    if(this.props != prevProps){
      this.setState({
          email: this.props.userToUpdate.email,
          age: this.props.userToUpdate.dob.age,
          phone: this.props.userToUpdate.phone,
      })
    }
  }

  

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const {email ,age,phone} = this.state;
    let updatedUser = {...this.props.userToUpdate}
    updatedUser.email = email;
    updatedUser.dob.age = age;
    updatedUser.phone = phone;
    this.props.updateUser(updatedUser )
    
    this.setState({
      email: "",
      age: "",
      phone:"",
    });
  }

  render() {
    return (
      <div className="row">
        <form className="col-md-6 offset-md-3 my-5">
          <h1>Update details here</h1>
          <div className="form-group">
            <label> Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              required
              autoFocus
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label> age</label>
            <input
              name="age"
              type="text"
              className="form-control"
              required
              placeholder="age"
              value={this.state.age}
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <div className="form-group">
            <label> phone</label>
            <input
              name="phone"
              type="text"
              className="form-control"
              required
              placeholder="phone"
              value={this.state.phone}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="text-center">
            <button
              onClick={this.onSubmit.bind(this)}
              className="btn btn-outline-primary"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateUser;
