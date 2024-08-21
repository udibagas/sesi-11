const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("my_store", "postgres", "postgres", {
  host: "localhost",
  port: 5432, // optional selama menggunakan port default
  dialect: "postgres",
  // logging: false,
});

module.exports = sequelize;
