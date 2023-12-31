import React from "react";
import { useSelector } from "react-redux";

import "./Users.css";
import User from "./User";

function UsersList() {
  const users = useSelector((state) => state.usersReducer);
  // console.log(users);

  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User user={user} key={user?._id} />
      ))}
    </div>
  );
}

export default UsersList;
