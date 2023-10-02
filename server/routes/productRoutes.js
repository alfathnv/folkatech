const express = require("express");
const pool = require("../db");
const router = express.Router();

// LIST PRODUCT
router.get("/", async (req, res) => {
  try {
    const query = "SELECT * FROM products";
    const { rows } = await pool.query(query);

    res.json(rows);
  } catch (error) {
    console.error("Error fetching data from PostgreSQL:", error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

// DETAIL PRODUCT
router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    const query = "SELECT * FROM products WHERE id = $1";
    const { rows } = await pool.query(query, [productId]);

    if (rows.length === 0) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error("Error fetching data from PostgreSQL:", error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

module.exports = router;
