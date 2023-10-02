const express = require("express");
const router = express.Router();
const pool = require("../db");

// REGISTER USER
router.post("/register", (req, res) => {
  res.send("Registrasi berhasil");
});

// LOGIN USER
router.post("/login", (req, res) => {
  res.send("Login berhasil");
});

module.exports = router;
