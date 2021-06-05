const faker = require("faker");
const { Students } = require("../db/models/students");
// spelling of houses should be the same as it is in model Students
const house = [
  "Gryffindor",
  "Hufflepuff",
  "Slytherin",
  "Ravenclaw",
  "undecided",
];

const student = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    dateOfBirth: faker.date.past(100),
    house: house[Math.floor(Math.random() * 5)],
  };
};

const createStudents = async (quantity) => {
  try {
    await Students.sync({ force: true });
    for (let i = 0; i < quantity; i++) {
      const newStudent = student();
      await Students.create(newStudent);
    }
  } catch (err) {
    console.log("creating students failed", err);
  }
};

module.exports = { createStudents };
