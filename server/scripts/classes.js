const { Classes } = require("../db/models/classes");
const { Students } = require("../db/models/students");
const { Professors } = require("../db/models/professors");
const { seedProfessors } = require("./professors.js");

const classes = [
  {
    subjectName: "Charms",
    professor: "Filius Flitwick",
    year: "first year",
  },
  {
    subjectName: "Charms",
    professor: "Filius Flitwick",
    year: "second year",
  },
  {
    subjectName: "Charms",
    professor: "Filius Flitwick",
    year: "third year",
  },
  {
    subjectName: "Defense against dark arts",
    professor: "Remus Lupin",
    year: "third year",
  },
  {
    subjectName: "Defense against dark arts",
    professor: "Quirinus Quirrell",
    year: "first year",
  },
  {
    subjectName: "Defense against dark arts",
    professor: "Gilderoy Lockhart",
    year: "second year",
  },
  {
    subjectName: "Astronomy",
    professor: "Aurora Sinistra",
    year: "first year",
  },
  {
    subjectName: "Astronomy",
    professor: "Aurora Sinistra",
    year: "second year",
  },
  {
    subjectName: "Astronomy",
    professor: "Aurora Sinistra",
    year: "third year",
  },
  {
    subjectName: "Herbology",
    professor: "Ponoma Sprout",
    year: "first year",
  },
  {
    subjectName: "Herbology",
    professor: "Ponoma Sprout",
    year: "second year",
  },
  {
    subjectName: "Herbology",
    professor: "Ponoma Sprout",
    year: "third year",
  },
  {
    subjectName: "History of Magic",
    professor: "Cuthbert Binns",
    year: "first year",
  },
  {
    subjectName: "History of Magic",
    professor: "Cuthbert Binns",
    year: "second year",
  },
  {
    subjectName: "History of Magic",
    professor: "Cuthbert Binns",
    year: "third year",
  },
  {
    subjectName: "Potions",
    professor: "Severus Snape",
    year: "first year",
  },
  {
    subjectName: "Potions",
    professor: "Severus Snape",
    year: "second year",
  },
  {
    subjectName: "Potions",
    professor: "Severus Snape",
    year: "third year",
  },
  {
    subjectName: "Transfiguration",
    professor: "Minerva McGonagall",
    year: "first year",
  },
  {
    subjectName: "Transfiguration",
    professor: "Minerva McGonagall",
    year: "second year",
  },
  {
    subjectName: "Transfiguration",
    professor: "Minerva McGonagall",
    year: "third year",
  },
];

const seedClasses = async () => {
  try {
    await Classes.sync({ force: true });
    const count_professors = await Professors.count();
    for (let i = 1; i <= count_professors; i++) {
      const professor = await Professors.findByPk(i);
      console.log("professor", professor.dataValues.id);
      const teach_grades_array = professor.dataValues.year;
      teach_grades_array.map(async (grade) => {
        const class_name = await Classes.create(
          {
            subjectName: professor.subject,
            professorName: professor.firstName + " " + professor.lastName,
            year: grade,
          }
          // {
          //   include: {
          //     model: Students,
          //     foreignKey: "std",
          //   },
          // }
        );
        // console.log(Object.keys(class_name.__proto__));
        await class_name.setProfessor(professor);
      });
    }
  } catch (err) {
    console.log("error in seed classes", err);
    return err;
  }
};

module.exports = { seedClasses };
