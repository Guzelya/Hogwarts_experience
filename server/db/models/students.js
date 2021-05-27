const Sequelize = require("sequelize");
const { db } = require("../db");
// maybe do npm install uuid
// console.log("db", db);
const Students = db.define("students", {
  //   id: {
  //     type: Sequelize.UUID,
  //     primaryKey: true,
  //     allowNull: false,
  //   },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  dateOfBirth: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  house: {
    type: Sequelize.ENUM(
      "Gryffindor",
      "Hufflepuff",
      "Slytherin",
      "Ravenclaw",
      "undecided"
    ),
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
});

// Students.sync({ force: true });

module.exports = { Students };
