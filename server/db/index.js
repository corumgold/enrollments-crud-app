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
    name: "University of Tennessee",
    imageUrl:
      "https://media-exp1.licdn.com/dms/image/C4D1BAQFz8kP2v7zASA/company-background_10000/0/1519799634774?e=2147483647&v=beta&t=TosW85pSJELKzC57ri7Gn2omEFEKI-h_B5Qom4PTLCI",
    address: "615 McCallie Ave, Chattanooga, TN 37402",
    description:
      "The University of Tennessee at Chattanooga is a public university in Chattanooga, Tennessee. It is one of four universities and two other affiliated institutions in the University of Tennessee System.",
  });

  await Campus.create({
    name: "Chattanooga State",
    imageUrl:
      "https://www.mbicompanies.com/wp-content/uploads/Photos/Projects/ChattStateHealthScience/MBI_ChattanoogaStateHealthSciences_Projects_001_1920.jpg",
    address: "4501 Amnicola Hwy, Chattanooga, TN 37406",
    description:
      "Chattanooga State Community College is a public community college in Chattanooga, Tennessee. The college is a member of the Tennessee Board of Regents System and is accredited by the Southern Association of Colleges and Schools. Athletically, Chattanooga State is a member of Region VII of the NJCAA.",
  });

  await Campus.create({
    name: "PennWest California",
    imageUrl: "https://www.calu.edu/news/2020/20files/campus-aerial.jpg",
    address: "250 University Ave, California, PA 15419",
    description:
      "Pennsylvania Western University, California is a public university campus in California, Pennsylvania and one of three campuses of Pennsylvania Western University, part of the Pennsylvania State System of Higher Education.",
  });

  await Student.create({
    firstName: "Philip D.",
    lastName: "Glass",
    email: "pdglass@gmail.com",
    gpa: 2.75,
    campusId: 1,
  });

  await Student.create({
    firstName: "Seamore",
    lastName: "Butts",
    email: "s.butts@underthebleachers.org",
    gpa: 1.46,
    campusId: 2,
  });

  await Student.create({
    firstName: "Anita",
    lastName: "Jobbe",
    email: "a.f.jobbe@hotmail.com",
    gpa: 3.51,
    campusId: 2,
  });

  await Student.create({
    firstName: "Barb E.",
    lastName: "Dahl",
    email: "barbdahl@yahoo.com",
    gpa: 4.0,
    campusId: 3,
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
