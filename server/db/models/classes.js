const Sequelize = require("sequelize");
const { db } = require("../db");

const Classes = db.define("classes", {
  subjectName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  professorName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  // what year are students, in other words - grades
  year: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = { Classes };
