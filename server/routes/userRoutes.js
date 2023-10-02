const express = require("express");
const router = express.Router();

// Rute untuk registrasi pengguna
router.post("/register", (req, res) => {
  res.send("Registrasi berhasil");
});

// Rute untuk login pengguna
router.post("/login", (req, res) => {
  res.send("Login berhasil");
});

module.exports = router;
