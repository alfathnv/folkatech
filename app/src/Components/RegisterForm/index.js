import React, { useState } from "react";
import "./RegisterForm.scss";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
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

  const handleContactChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePasswordConfirmation = () => {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  const handleNextForm = () => {
    if (firstName && lastName && email) {
      setNextform(!nextForm);
    }
  };

  return (
    <div className="login-form">
      {!nextForm ? (
        <h2>Daftar Sekarang</h2>
      ) : (
        <h2 onClick={handleNextForm} className="previous">
          {"<| Kembali"}
        </h2>
      )}
      <div className="form-group">
        {!nextForm ? (
          <>
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
          </>
        ) : (
          <>
            <div className="contact">
              <input
                type="text"
                placeholder="Nomor Telepon"
                value={contact}
                onChange={handleContactChange}
              />
            </div>
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                className="toggle-password"
                onClick={handleTogglePassword}
              >
                <p>{showPassword ? "Hide" : "Show"}</p>
              </button>
            </div>
            <div className="password_confirmation">
              <input
                type={showPasswordConfirmation ? "text" : "password"}
                placeholder="Konfirmasi Password"
                value={passwordConfirmation}
                onChange={handlePasswordConfirmationChange}
              />
              <button
                className="toggle-password"
                onClick={handleTogglePasswordConfirmation}
              >
                <p>{showPasswordConfirmation ? "Hide" : "Show"}</p>
              </button>
            </div>
          </>
        )}
      </div>
      <button className="next-button" onClick={handleNextForm}>
        {!nextForm ? "Selanjutnya" : "Register"}
      </button>
      <div className="separator"></div>
      <p className="register-link">
        Sudah punya akun? <a href="/login">Masuk</a>
      </p>
    </div>
  );
};

export default RegisterForm;
