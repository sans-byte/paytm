import React from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import Input from "../Components/Input";
import Button from "../Components/Button";
import BottomWarning from "../Components/BottomWarning";

function SignUp() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="flex justify-center items-center flex-col gap-2 w-80 bg-slate-400 rounded-md px-5 py-4">
        <Heading> Sign Up</Heading>
        <SubHeading> Enter your information to create an account </SubHeading>
        <Input
          label="First Name"
          name={"firstName"}
          placeholder={"John"}
        ></Input>
        <Input label="Last Name" name={"lastName"} placeholder={"Doe"}></Input>
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
        <Button> Sign Up </Button>
        <BottomWarning link={"Sign in"} to={"/signin"}>
          Already have an account?
        </BottomWarning>
      </div>
    </div>
  );
}

export default SignUp;
