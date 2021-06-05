const faker = require("faker");
const db = require("./server/db/db.js");
const { Students } = require("./server/db/models/students");
const { Classes } = require("./server/db/models/classes");

const models = require("./server/db/models");
const { Student_Classes } = require("./server/db/models/student_classes.js");
const { seedStudentClasses } = require("./server/scripts/student_classes.js");
const { Professors } = require("./server/db/models/professors.js");
const { seedProfessors } = require("./server/scripts/professors.js");
const { seedClasses } = require("./server/scripts/classes.js");
const { Wands } = require("./server/db/models/wands.js");
const { seedWands } = require("./server/scripts/wands");

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

const seed = async () => {
  try {
    // await Professors.sync({ force: true });
    // await seedProfessors();
    await seedClasses();
    await seedStudentClasses();
    await Wands.sync({ force: true });
    await seedWands(20);
    console.log("seeding success");
  } catch (err) {
    console.log("seeding failed", err);
  }
};

seed();
