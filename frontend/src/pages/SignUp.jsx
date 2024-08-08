import React, { useRef } from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import Input from "../Components/Input";
import Button from "../Components/Button";
import BottomWarning from "../Components/BottomWarning";
import { signUp } from "../services/userService";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const response = await signUp(payload);
      if (response && response.status === 201) {
        alert("User Created");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        return navigate("/dashboard");
      } else {
        if (typeof response.data === "object") {
          return response.data.map((err) => alert(err.message));
        }
        return alert(response.data);
      }
    } catch (error) {
      console.log(error);
      return alert("Something went wrong");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="flex justify-center items-center flex-col gap-2 w-80 bg-slate-400 rounded-md px-5 py-4">
        <Heading> Sign Up</Heading>
        <SubHeading> Enter your information to create an account </SubHeading>
        <Input
          label="First Name"
          name={"firstName"}
          placeholder={"John"}
          ref={firstName}
        ></Input>
        <Input
          label="Last Name"
          name={"lastName"}
          placeholder={"Doe"}
          ref={lastName}
        ></Input>
        <Input
          label="Email"
          name={"Email"}
          placeholder={"johndoe@gmail.com"}
          ref={email}
        ></Input>
        <Input
          label="Password"
          name={"Password"}
          placeholder={"Password@123"}
          ref={password}
        ></Input>
        <div></div>
        <Button size={"lg"} onClick={handleSubmit}>
          Sign Up
        </Button>
        <BottomWarning link={"Sign in"} to={"/"}>
          Already have an account?
        </BottomWarning>
      </div>
    </div>
  );
}

export default SignUp;
