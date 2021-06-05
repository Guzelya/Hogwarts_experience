const { Classes } = require("../db/models/classes");
const { Professors } = require("../db/models/professors");

const seedClasses = async () => {
  try {
    await Classes.sync({ force: true });
    const count_professors = await Professors.count();
    for (let i = 1; i <= count_professors; i++) {
      const professor = await Professors.findByPk(i);
      const teach_grades_array = professor.dataValues.year;
      teach_grades_array.map(async (grade) => {
        const class_name = await Classes.create({
          subjectName: professor.subject,
          professorName: professor.firstName + " " + professor.lastName,
          year: grade,
        });
        await class_name.setProfessor(professor);
      });
    }
  } catch (err) {
    console.log("error in seed classes", err);
    return err;
  }
};

module.exports = { seedClasses };
