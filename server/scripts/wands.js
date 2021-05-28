const faker = require("faker");
const db = require("../db/db.js");
const { Wands } = require("../db/models/wands");
const { Students } = require("../db/models/students");

const core = ["unicorn hair", "dragon heartstring", "phoenix feather"];

const wood = [
  "apple",
  "ash",
  "beech",
  "blackthorn",
  "cedar",
  "cherry",
  "ebony",
  "elm",
  "hawthorn",
  "hazel",
  "mahogany",
  "maple",
  "oak",
  "pear",
  "pine",
  "redwood",
  "sycamore",
  "walnut",
  "willow",
];

const flexibility = ["hard", "slightly springy", "flexible"];

const length = ["9", "11", "13", "15"];

const seedWands = async (quantity) => {
  try {
    await Wands.sync({ force: true });
    for (let i = 1; i <= quantity; i++) {
      const student = await Students.findByPk(i);
      const one_wand = await Wands.create({
        core: core[Math.floor(Math.random() * 3)],
        wood: wood[Math.floor(Math.random() * wood.length)],
        flexibility: flexibility[Math.floor(Math.random() * 3)],
        length: length[Math.floor(Math.random() * 4)],
      });
      //   console.log(Object.keys(one_wand.__proto__));
      one_wand.setStudent(student);
      //   student.setWand(one_wand);
    }
  } catch (err) {
    console.log("did not seed wands", err);
    return err;
  }
};

module.exports = { seedWands };
