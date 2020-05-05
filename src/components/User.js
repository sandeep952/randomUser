import React from "react";

const User = ({ user, picture }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card ml-2 my-4">
        <img
          className="card-img-top"
          src={picture ? picture.large : ""}
          alt="user image"
        />
        <div className="card-body">
          <h5 className="card-title">{`${user.name.first} ${user.name.last}`}</h5>
          <div className="card-text">


          <div>
          <span className="badge badge-secondary">Age :</span>
          <p> {user.dob.age}</p>
        </div>
          <div>
              <span className="badge badge-secondary">Email :</span>
              <p> {user.email}</p>
            </div>

            <div>
              <span className="badge badge-secondary">Phone :</span>
              <p> {user.cell}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
