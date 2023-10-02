import React, { useEffect } from "react";
import LoginForm from "../Components/LoginForm";

const Login = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      window.location.href = "/";
    }
  }, []);

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
