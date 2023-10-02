import React from "react";
import RegisterForm from "../Components/RegisterForm";

const Register = () => {
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
