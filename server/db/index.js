// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./database");
const Student = require("./student");
const Campus = require("./campus");

Student.belongsTo(Campus);
Campus.hasMany(Student);

const syncAndSeed = async () => {
  await db.sync({ force: true });

  //use this area to sync your database
  await Campus.create({
    name: "University of Oregon",
    imageUrl:
      "https://ca-times.brightspotcdn.com/dims4/default/5f1da58/2147483647/strip/true/crop/1738x912+0+123/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fca%2F15%2Fd83b224aa6f519102f14516e6c05%2Fla-trb-clh1-ca-0e-0813-lampoon10-0-1-20180730",
    address: "1585 E 13th Ave, Eugene, OR 97403",
    description:
      "When they arrive at college, socially inept freshmen Larry (Thomas Hulce) and Kent (Stephen Furst) attempt to pledge the snooty Omega Theta Pi House, but are summarily rejected. Lowering their standards, they try at the notoriously rowdy Delta Tau Chi House, and get in. The trouble is, the college dean (John Vernon) has it in for the Deltas. He has put them on 'Double Secret Probation' and secretly assigned Omega's president (James Daughton) the task of having their charter revoked.",
  });

  await Student.create({
    firstName: "John (Bluto)",
    lastName: "Blutarsky",
    email: "j.blutarsky@oregon.edu",
    imageUrl:
      "https://static.wikia.nocookie.net/p__/images/0/08/John_Blutarsky.jpg/revision/latest?cb=20140104152718&path-prefix=protagonist",
    gpa: 1.46,
  });

  console.log(`
    Seeding successful!
  `);
};

module.exports = {
  // Include your models in this exports object as well!
  db,
  syncAndSeed,
  Student,
  Campus,
};
