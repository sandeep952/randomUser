import React from "react";
import User from "./User";

const IncompleteUsers = (props) => {
  return (
    <div className="row">
        {(props.users.filter((user)=>user.picture?true:false)).map((user)=> <User
          key={user.login.uuid}
          user={user}
          loadUser={props.loadUser}
          deleteUser={props.deleteUser}
        />)}
    </div>
  );
};

export default IncompleteUsers;
