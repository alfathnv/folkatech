import React, { useState } from "react";
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nextForm, setNextform] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNextForm = () => {
    setNextform(true);
  };

  return (
    <div className="login-form">
      <h2>Daftar Sekarang</h2>
      <div className="form-group">
        <div className="first_name">
          <input
            type="text"
            placeholder="Nama Depan"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="last_name">
          <input
            type="text"
            placeholder="Nama Belakang"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="email">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>
      <button className="next-button" onClick={handleNextForm}>
        Selanjutnya
      </button>
      <div className="separator"></div>
      <p className="register-link">
        Sudah punya akun? <a href="/register">Masuk</a>
      </p>
    </div>
  );
};

export default RegisterForm;
