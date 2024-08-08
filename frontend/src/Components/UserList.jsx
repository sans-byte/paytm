import React from "react";
import UserItem from "./UserItem";

function UserList({ users, model, toUser }) {
  return (
    <div>
      {users.map((user, key) => (
        <UserItem user={user} key={key} model={model} toUser={toUser} />
      ))}
    </div>
  );
}

export default UserList;
