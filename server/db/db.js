require("dotenv").config();
const chalk = require("chalk");
const Sequelize = require("sequelize");

console.log(chalk.blue("Hello world!"));
const dataBaseName = process.env.DATABASE;
console.log(dataBaseName);

const db = new Sequelize(
  `postgres://localhost:5432/${dataBaseName}`,

  { logging: false }
  // process.env.DATABASE,
  //   { dialect: "postgres" }
);

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = { db };
