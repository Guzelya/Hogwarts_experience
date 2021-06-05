const faker = require("faker");
const { Professors } = require("../db/models/professors");
const { Classes } = require("../db/models/classes");

const professors = [
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Hufflepuff",
    dateOfBirth: faker.date.between("1850-01-01", "1950-01-01"),
    subject: "Charms",
    year: ["first year", "second year", "third year"],
  },
  {
    firstName: "Remus",
    lastName: "Lupin",
    house: "Gryffindor",
    dateOfBirth: faker.date.between("1850-01-01", "1950-01-01"),
    subject: "Defense against dark arts",
    year: ["third year"],
  },
  {
    firstName: "Quirinus",
    lastName: "Quirrell",
    house: "Hufflepuff",
    dateOfBirth: faker.date.between("1850-01-01", "1950-01-01"),
    subject: "Defense against dark arts",
    year: ["first year"],
  },
  {
    firstName: "Gilderoy",
    lastName: "Lockhart",
    house: "Gryffindor",
    dateOfBirth: faker.date.between("1850-01-01", "1950-01-01"),
    subject: "Defense against dark arts",
    year: ["second year"],
  },
  {
    firstName: "Aurora",
    lastName: "Sinistra",
    house: "Ravenclaw",
    dateOfBirth: faker.date.between("1850-01-01", "1950-01-01"),
    subject: "Astronomy",
    year: ["first year", "second year", "third year"],
  },
  {
    firstName: "Ponoma",
    lastName: "Sprout",
    house: "Ravenclaw",
    dateOfBirth: faker.date.between("1850-01-01", "1950-01-01"),
    subject: "Herbology",
    year: ["first year", "second year", "third year"],
  },
  {
    firstName: "Cuthbert",
    lastName: "Binns",
    house: "Slytherin",
    dateOfBirth: faker.date.between("1850-01-01", "1950-01-01"),
    subject: "History of Magic",
    year: ["first year", "second year", "third year"],
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    dateOfBirth: faker.date.between("1850-01-01", "1950-01-01"),
    subject: "Potions",
    year: ["first year", "second year", "third year"],
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    dateOfBirth: faker.date.between("1850-01-01", "1950-01-01"),
    subject: "Transfiguration",
    year: ["first year", "second year", "third year"],
  },
];

const seedProfessors = async () => {
  try {
    await Professors.sync({ force: true });
    await Classes.sync({ force: true });
    let allProfs = Promise.all(
      professors.map((prof) => {
        return Professors.create(prof);
      })
    );
  } catch (err) {
    console.log("error is seed professors", err);
    return err;
  }
};

module.exports = { seedProfessors };
