import React from "react";
import UserItem from "./UserItem";

function UserList({ users }) {
  return (
    <div>
      {users.map((user, key) => (
        <UserItem user={user} key={key} />
      ))}
    </div>
  );
}

export default UserList;
