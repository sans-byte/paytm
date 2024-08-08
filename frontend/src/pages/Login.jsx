import React, { useRef } from "react";
import Heading from "../Components/Heading";
import SubHeading from "../Components/SubHeading";
import Input from "../Components/Input";
import Button from "../Components/Button";
import BottomWarning from "../Components/BottomWarning";
import { signin } from "../services/userService";
import { useNavigate } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const response = await signin(payload);
      console.log(response);
      if (response && response.status === 200) {
        alert("Logged In success");
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
      return alert("Something went wrong while login");
    }
  };

  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
        <div className="flex justify-center items-center flex-col gap-2 w-80 bg-slate-400 rounded-md px-5 py-4">
          <Heading> Sign In</Heading>
          <SubHeading>
            Enter the information to sign in to your account
          </SubHeading>
          <Input
            label="Email"
            name={"Email"}
            placeholder={"johndoe@gmail.com"}
            ref={email}
          ></Input>
          <Input
            label="Password"
            type="password"
            name={"Password"}
            placeholder={"Password@123"}
            ref={password}
          ></Input>
          <div></div>
          <Button size={"lg"} onClick={handleSubmit}>
            Sign In
          </Button>
          <BottomWarning link={"Sign up"} to={"/signup"}>
            Do not have an account?
          </BottomWarning>
        </div>
      </div>
    </div>
  );
}

export default Login;
