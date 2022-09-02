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
  db,
  syncAndSeed,
  Student,
  Campus,
};
