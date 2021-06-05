const Sequelize = require("sequelize");
const { db } = require("../db");

const Students = db.define("students", {
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

module.exports = { Students };
