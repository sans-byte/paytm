import React from "react";
import Heading from "../Components/Heading";
import Button from "../Components/Button";
import Input from "../Components/Input";

function SendMoney() {
  return (
    <div>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="h-80 w-80 bg-slate-100 rounded-md shadow-md p-2 justify-between flex items-center flex-col ">
          <Heading> Send Money </Heading>
          <div className="w-full h-1/2">
            <div className="flex justify-start items-center w-5/6 mx-auto mb-5">
              <div className="h-10 w-10 bg-slate-400 rounded-full flex justify-center items-center text-xl">
                S
              </div>
              <p className="px-4 capitalize">Sanskar Jain</p>
            </div>
            <Input label={"Enter Amount"} placeholder={"₹ 500"}></Input>
          </div>

          <div className="mb-5">
            <Button>Send Money</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMoney;