const { Sequelize } = require('sequelize');

// Create a connection to database
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const db = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOSTNAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  logging: false, // => false para que no se muestre el log en la terminal, por default es true
});

module.exports = { db };
