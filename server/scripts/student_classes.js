const { Student_Classes } = require("../db/models/student_classes");
const { Students } = require("../db/models/students");
const { Classes } = require("../db/models/classes");
const { createStudents } = require("./students");

const grades = [
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
  "F",
];

const year = ["first year", "second year", "third year"];

const seedStudentClasses = async () => {
  try {
    await createStudents(20);
    // await seedClasses();
    await Student_Classes.sync({ force: true });
    const count_students = await Students.count();
    const count_classes = await Classes.count();
    for (let i = 1; i <= count_students; i++) {
      const student = await Students.findByPk(i);
      const student_year = year[Math.floor(Math.random() * 3)];
      const all_year_classes = await Classes.findAll({
        where: {
          year: student_year,
        },
      });
      // console.log("all subjects", all_year_subjects);
      all_year_classes.map(async (subject) => {
        const class_id = subject.dataValues.id;
        // console.log("subjkect_id", subject_id);
        const class_year = await Classes.findByPk(class_id);
        await student.addClasses(class_year, {
          through: {
            midtermGrade: grades[Math.floor(Math.random() * 13)],
            projectGrade: Math.floor(Math.random() * 20),
            finalGrade: grades[Math.floor(Math.random() * 13)],
          },
        });
      });
    }
  } catch (err) {
    console.log("err in seedClasses", err);
    return err;
  }
};

module.exports = { seedStudentClasses };
