import React, { useEffect } from "react";
import RegisterForm from "../Components/RegisterForm";

const Register = () => {
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
      <RegisterForm />
    </div>
  );
};

export default Register;
