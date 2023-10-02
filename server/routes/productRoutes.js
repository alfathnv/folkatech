const express = require("express");
const pool = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.userId = decoded.userId;
    next();
  });
}

// LIST PRODUCT
router.get("/", verifyToken, async (req, res) => {
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
router.get("/:id", verifyToken, async (req, res) => {
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
