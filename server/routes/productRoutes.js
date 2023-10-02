const express = require("express");
const router = express.Router();

// LIST PRODUCT
router.get("/", (req, res) => {
  res.json({ products: [] });
});

// DETAIL PRODUCT
router.get("/:id", (req, res) => {
  const productId = req.params.id;
  res.json({ product: {} });
});

module.exports = router;
