const bcrypt = require("bcrypt");

userDatas = [
  {
    first_name: "Admin",
    last_name: "User",
    email: "admin@example.com",
    contact: "1234567890",
    password: bcrypt.hashSync("123456", 10), // Hashed password
  },
];

module.exports = userDatas;
