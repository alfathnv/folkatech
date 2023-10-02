import React from "react";
import LoginForm from "../Components/LoginForm";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <LoginForm />
    </div>
  );
};

export default Login;
