const { Classes } = require("./classes");
const { Professors } = require("./professors");
const { Student_Classes } = require("./student_classes");
const { Students } = require("./students");
const { Wands } = require("./wands");
const { db } = require("../db");

Students.belongsToMany(Classes, {
  through: Student_Classes,
  // uniqueKey: "my_custom_unique",
});
Classes.belongsToMany(Students, {
  through: Student_Classes,
  // uniqueKey: "my_custom_unique",
});

// hasMany association will insert foreign key to Classes tables(target)
Professors.hasMany(Classes);
// belongsTo association will insert foreign key to Classes(source)
Classes.belongsTo(Professors);

Students.hasOne(Wands);
Wands.belongsTo(Students);

module.exports = {
  Students,
  Professors,
  Classes,
  Student_Classes,
  Wands,
  db,
};
