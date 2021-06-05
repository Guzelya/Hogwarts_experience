const { db } = require("./server/db/db");
// don't forget to add models, they include all of the associations
// otherwise you won't be able to seed the database
const models = require("./server/db/models");
const { seedStudentClasses } = require("./server/scripts/student_classes");
const { seedProfessors } = require("./server/scripts/professors");
const { seedClasses } = require("./server/scripts/classes");
const { seedWands } = require("./server/scripts/wands");

const seed = async () => {
  try {
    await db.sync({ force: true });
    await seedProfessors();
    await seedClasses();
    await seedStudentClasses();
    await seedWands(20);
    console.log("seeding success");
    await db.close();
  } catch (err) {
    console.log("seeding failed", err);
  }
};

seed();
