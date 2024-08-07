import React from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import Input from "../Components/Input";
import Button from "../Components/Button";
import BottomWarning from "../Components/BottomWarning";

function Login() {
  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
        <div className="flex justify-center items-center flex-col gap-2 w-80 bg-slate-400 rounded-md px-5 py-4">
          <Heading> Sign In</Heading>
          <SubHeading>
            Enter the information to sign in to your account{" "}
          </SubHeading>
          <Input
            label="Email"
            name={"Email"}
            placeholder={"johndoe@gmail.com"}
          ></Input>
          <Input
            label="Password"
            name={"Password"}
            placeholder={"Password@123"}
          ></Input>
          <div></div>
          <Button size={"lg"}> Sign In</Button>
          <BottomWarning link={"Sign up"} to={"/signup"}>
            Do not have an account?
          </BottomWarning>
        </div>
      </div>
    </div>
  );
}

export default Login;
