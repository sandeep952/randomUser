import React from "react";
import User from "./User";

const IncompleteUsers = (props) => {
  return (
    <div>
      <div className="row">
        {props.inCompleteUsers ? (
          props.inCompleteUsers.map((user) => (
            <User
              key={user.login.uuid}
              user={user}
              type="inCompleteUsers"
              deleteUser={props.deleteUser}
            />
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

export default IncompleteUsers;
