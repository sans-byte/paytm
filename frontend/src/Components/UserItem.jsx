import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function UserItem({ user, model, toUser }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center bg-slate-100 p-1 mt-1 rounded-md">
      <div className="flex justify-start items-center">
        <div className="h-10 w-10 bg-slate-400 rounded-full flex justify-center items-center text-xl">
          {user?.firstName.split("")[0].toUpperCase()}
        </div>
        <p className="px-4 capitalize">
          {user?.firstName + " " + user?.lastName}
        </p>
      </div>
      <div>
        <Button
          onClick={() => {
            toUser(user);
            model();
          }}
        >
          Send Money
        </Button>
      </div>
    </div>
  );
}

export default UserItem;
