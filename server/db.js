const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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
        image VARCHAR(255) NOT NULL,
        description VARCHAR(255),
        rating NUMERIC,
        rating_count NUMERIC
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
      const imagePath = path.join(data.image);
      const query =
        "INSERT INTO products (name, store, price, image, description, rating, rating_count) VALUES ($1, $2, $3, $4, $5, $6, $7)";
      const values = [
        data.name,
        data.store,
        data.price,
        imagePath,
        data.description,
        data.rating,
        data.rating_count,
      ];
      await client.query(query, values);
    }

    for (const data of userDatas) {
      const query =
        "INSERT INTO users (first_name, last_name, email, contact, password) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (email) DO NOTHING";
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
