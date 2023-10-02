const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Selamat datang di server REST API!");
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

app.post("/register", (req, res) => {
  res.send("Registrasi berhasil");
});

app.post("/login", (req, res) => {
  res.send("Login berhasil");
});

app.get("/products", (req, res) => {
  res.json({ products: [] });
});

app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  res.json({ product: {} });
});
