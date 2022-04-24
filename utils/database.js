const { Sequelize } = require("sequelize");

// Create a connection to database

const db = new Sequelize({
  dialect: "******",
  host: "******",
  username: "******",
  password: "******",
  database: "******",
  logging: false   // => false para que no se muestre el log en la terminal, por default es true
});

module.exports = { db };
