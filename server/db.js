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

const productDatas = require("./datas/productDatas");
const userDatas = require("./datas/userDatas");

async function seedDataIntoDatabase() {
  const client = await pool.connect();

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS products (
        id serial PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        store VARCHAR(255) NOT NULL,
        price NUMERIC NOT NULL,
        image VARCHAR(255),
        description VARCHAR(255),
        rating NUMERIC,
        ratingCount NUMERIC
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id serial PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        contact VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `);

    for (const data of productDatas) {
      const imagePath = path.join(__dirname, data.image);
      const query =
        "INSERT INTO products (name, store, price, image, description, rating, ratingCount) VALUES ($1, $2, $3, $4, $5, $6, $7)";
      const values = [
        data.name,
        data.store,
        data.price,
        imagePath,
        data.description,
        data.rating,
        data.ratingCount,
      ];
      await client.query(query, values);
    }

    for (const data of userDatas) {
      const query =
        "INSERT INTO users (first_name, last_name, email, contact, password) VALUES ($1, $2, $3, $4, $5)";
      const values = [
        data.first_name,
        data.last_name,
        data.email,
        data.contact,
        data.password,
      ];
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
