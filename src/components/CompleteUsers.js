import React from "react";
import User from "./User";

const CompleteUsers = (props) => {
  return (
    <div className="row">
        {props.users.filter((user)=>user.picture!==null).map((user)=> <User
          key={user.login.uuid}
          user={user}
          picture={user.picture}
          loadUser={props.loadUser}
          deleteUser={props.deleteUser}
        />)}
    </div>
  );
};

export default CompleteUsers;
