const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "folkatech",
  password: "akudansaya",
  port: 5432,
});

const datas = require("./datas/productData");

async function seedDataIntoDatabase() {
  const client = await pool.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS products (
        id serial PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        store VARCHAR(255) NOT NULL,
        price NUMERIC NOT NULL,
        image_data bytea
      );
    `);

    for (const data of datas) {
      const imagePath = path.join(__dirname, "server/", data.image);
      const imageBuffer = fs.readFileSync(imagePath);
      const query =
        "INSERT INTO products (name, store, price, image_data) VALUES ($1, $2, $3, $4)";
      const values = [data.name, data.store, data.price, imageBuffer];
      await client.query(query, values);
    }

    console.log("Data berhasil dimasukkan ke dalam tabel.");
  } catch (error) {
    console.error("Kesalahan dalam memasukkan data:", error);
  } finally {
    client.release();
  }
}

seedDataIntoDatabase();

module.exports = pool;
