const Sequelize = require("sequelize");
const { db } = require("../db");

const Student_Classes = db.define("student_classes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  midtermGrade: {
    type: Sequelize.ENUM(
      "A+",
      "A",
      "A-",
      "B+",
      "B",
      "B-",
      "C+",
      "C",
      "C-",
      "D+",
      "D",
      "D-",
      "F"
    ),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  projectGrade: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  finalGrade: {
    type: Sequelize.ENUM(
      "A+",
      "A",
      "A-",
      "B+",
      "B",
      "B-",
      "C+",
      "C",
      "C-",
      "D+",
      "D",
      "D-",
      "F"
    ),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});
module.exports = { Student_Classes };
