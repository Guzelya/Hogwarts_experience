const faker = require("faker");
const db = require("../db/db.js");
const { Wands } = require("../db/models/wands");

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

const seedWands = async () => {
  try {
    await Wands.sync({ force: true });
    await Wands.create({
      core: core[Math.floor(Math.random() * 3)],
      wood: wood[Math.floor(Math.random() * wood.length)],
      flexibility: flexibility[Math.floor(Math.random() * 3)],
      length: length[Math.floor(Math.random() * 4)],
    });
  } catch (err) {
    console.log("did not seed wands", err);
    return err;
  }
};

module.exports = { seedWands };
