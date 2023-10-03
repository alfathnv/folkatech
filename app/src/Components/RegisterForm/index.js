import React, { useState } from "react";
import "./RegisterForm.scss";
import axios from "axios";

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
  const [error, setError] = useState(null);

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
    setContact(e.target.value);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      return setError("Confirmation Password berbeda!");
    }

    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      contact: contact,
    };

    try {
      // Send a POST request to your registration API endpoint
      const response = await axios.post(
        "http://localhost:5000/users/register",
        formData
      );
      if (response.data) {
        window.location.href = "/";
      }
      // Handle the response, e.g., show a success message
      console.log("Registration successful", response.data);
    } catch (error) {
      // Handle any registration errors, e.g., show an error message
      console.error("Registration error", error);
      setError(error.response.data.message);
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
      {error && <p className="error">{error}</p>}
      <form className="form-group" onSubmit={handleSubmit}>
        {!nextForm ? (
          <>
            <div className="first_name">
              <input
                type="text"
                placeholder="Nama Depan"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div className="last_name">
              <input
                type="text"
                placeholder="Nama Belakang"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
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
                required
              />
            </div>
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
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
                required
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
        {!nextForm ? (
          <button className="next-button" onClick={handleNextForm}>
            Selanjutnya
          </button>
        ) : (
          <button type="submit" className="next-button">
            Register
          </button>
        )}
      </form>

      <div className="separator"></div>
      <p className="register-link">
        Sudah punya akun? <a href="/login">Masuk</a>
      </p>
    </div>
  );
};

export default RegisterForm;
