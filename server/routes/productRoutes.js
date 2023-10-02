const express = require("express");
const router = express.Router();

// Rute untuk mendapatkan daftar produk
router.get("/", (req, res) => {
  res.json({ products: [] });
});

// Rute untuk mendapatkan detail produk berdasarkan ID
router.get("/:id", (req, res) => {
  const productId = req.params.id;
  res.json({ product: {} });
});

module.exports = router;
