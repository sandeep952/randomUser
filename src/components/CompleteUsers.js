import React from "react";
import User from "./User";

const CompleteUsers = (props) => {
  return (
    <div className="row">
      {props.completeUsers ? (
        props.completeUsers.map((user) => (
          <User
            key={user.login.uuid}
            type="completeUsers"
            user={user}
            loadUser={props.loadUser}
            deleteUser={props.deleteUser}
          />
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default CompleteUsers;
