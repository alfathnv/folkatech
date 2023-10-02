import React, { useState } from "react";
import "./LoginForm.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-form">
      <h2>Masuk</h2>
      <div className="form-group">
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
      </div>
      <a>Lupa Password?</a>
      <button className="login-button" onClick={handleLogin}>
        Masuk
      </button>
      <div className="separator"></div>
      <p className="register-link">
        Belum punya akun? <a href="/register">Daftar Sekarang</a>
      </p>
    </div>
  );
};

export default LoginForm;
