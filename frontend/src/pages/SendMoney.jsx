import React from "react";
import Heading from "../Components/Heading";
import Button from "../Components/Button";
import Input from "../Components/Input";

function SendMoney({ onSubmit, onCancel, user, setAmount, buttonLoader }) {
  return (
    <div>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="h-80 w-80 bg-slate-100 rounded-md shadow-md p-2 justify-between flex items-center flex-col ">
          <Heading> Send Money </Heading>
          <div className="w-full h-1/2">
            <div className="flex justify-start items-center w-5/6 mx-auto mb-5">
              <div className="h-10 w-10 bg-slate-400 rounded-full flex justify-center items-center text-xl">
                {user.firstName.split("")[0].toUpperCase()}
              </div>
              <p className="px-4 capitalize">
                {user?.firstName + " " + user?.lastName}
              </p>
            </div>
            <Input
              label={"Enter Amount"}
              placeholder={"₹ 500"}
              onChange={setAmount}
              type={"number"}
            ></Input>
          </div>

          <div className="mb-5 flex justify-between w-5/6">
            <Button onClick={onSubmit} buttonLoader={buttonLoader}>
              Send Money
            </Button>
            <Button onClick={onCancel}> Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMoney;
