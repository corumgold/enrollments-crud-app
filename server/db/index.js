// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./database");
const Student = require("./student");
const Campus = require("./campus");
const seed = require("./seed");

Student.belongsTo(Campus);
Campus.hasMany(Student);

const syncAndSeed = async () => {
  await db.sync({ force: true });
  seed();
};

module.exports = {
  // Include your models in this exports object as well!
  db,
  syncAndSeed,
  Student,
  Campus,
};
