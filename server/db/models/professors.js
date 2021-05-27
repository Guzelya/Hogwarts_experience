const Sequelize = require("sequelize");
const { db } = require("../db");

const Professors = db.define("professors", {
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
  house: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  subject: {
    type: Sequelize.STRING,
    allowNull: true,
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
  year: {
    type: Sequelize.ARRAY(
      Sequelize.ENUM({
        values: ["first year", "second year", "third year"],
      })
    ),
  },
});

module.exports = { Professors };
