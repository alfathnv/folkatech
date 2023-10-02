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

// Impor rute-rute pengguna dan produk
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");

// Gunakan rute-rute tersebut
app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
