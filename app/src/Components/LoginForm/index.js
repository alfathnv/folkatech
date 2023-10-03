import React, { useState } from "react";
import "./LoginForm.scss";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      window.location.href = "/";
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-form">
      <h2>Masuk</h2>
      {error && <p className="error">{error}</p>}
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="email">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="password">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="toggle-password" onClick={handleTogglePassword}>
            <p>{showPassword ? "Hide" : "Show"}</p>
          </button>
        </div>
        <a>Lupa Password?</a>
        <button type="submit" className="login-button">
          Masuk
        </button>
      </form>

      <div className="separator"></div>
      <p className="register-link">
        Belum punya akun? <a href="/register">Daftar Sekarang</a>
      </p>
    </div>
  );
};

export default LoginForm;
