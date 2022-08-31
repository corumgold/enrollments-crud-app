const db = require("./database");
const Student = require("./student");
const Campus = require("./campus");

const seed = async () => {
  // CAMPUSES

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

  await Campus.create({
    name: "New York University",
    imageUrl:
      "https://www.thoughtco.com/thmb/XOPDHsYHwaRSO9YCGcWZANhGDto=/3435x2576/smart/filters:no_upscale()/washington-square-park--new-york-city--usa-591496237-5c0f20eac9e77c0001c27596.jpg",
    address: "New York, NY 10012",
    description:
      "New York University is a private research university in New York City. Chartered in 1831 by the New York State Legislature, NYU was founded by a group of New Yorkers led by then-Secretary of the Treasury Albert Gallatin.",
  });

  await Campus.create({
    name: "Carnegie Mellon University",
    imageUrl:
      "https://www.bcj.com/wp-content/uploads/2018/05/ANSYS_CC_4362_medium.jpg",
    address: "5000 Forbes Ave, Pittsburgh, PA 15213",
    description:
      "Carnegie Mellon University is a private research university based in Pittsburgh, Pennsylvania. The university is the result of a merger of the Carnegie Institute of Technology and the Mellon Institute of Industrial Research.",
  });

  await Campus.create({
    name: "New Jersey City University",
    imageUrl:
      "https://www.bcj.com/wp-content/uploads/2018/05/ANSYS_CC_4362_medium.jpg",
    address: "2039 John F. Kennedy Blvd, Jersey City, NJ 07305",
    description:
      "Originally chartered in 1927, and known as Jersey City State College for 40 years of its history, New Jersey City University consists of the School of Business, College of Arts and Sciences, College of Education, and College of Professional Studies. NJCU enrolls over 8,500 students and is part of New Jersey's public system of higher education.",
  });

  // STUDENTS

  await Student.create({
    firstName: "Philip D.",
    lastName: "Glass",
    email: "pdglass@gmail.com",
    imageUrl:
      "https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png",
    gpa: 2.75,
  });

  await Student.create({
    firstName: "Billy",
    lastName: "Buildsmore",
    email: "b.builder@bleachers.org",
    imageUrl:
      "https://files.consumerfinance.gov/f/images/cfpb_choosing-a-loan.original.jpg",
    gpa: 1.46,
    campusId: 2,
  });

  await Student.create({
    firstName: "Anita",
    lastName: "Jobbe",
    email: "a.f.jobbe@hotmail.com",
    imageUrl:
      "https://regionalcollegepa.org/wp-content/uploads/2020/06/shutterstock_660004024.jpg",
    gpa: 3.51,
    campusId: 2,
  });

  await Student.create({
    firstName: "Barb E.",
    lastName: "Dahl",
    email: "barbdahl@yahoo.com",
    imageUrl:
      "https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/EDUCMS/tz7n-7vqceaq86dprdnzag.jpg",
    gpa: 4.0,
    campusId: 1,
  });

  await Student.create({
    firstName: "Hugh",
    lastName: "Ray",
    email: "hray@yahoo.com",
    imageUrl:
      "https://thumbs.dreamstime.com/b/front-portrait-handsome-young-man-smiling-looking-camera-close-up-front-portrait-handsome-young-man-smiling-153359898.jpg",
    gpa: 2.89,
    campusId: 4,
  });

  await Student.create({
    firstName: "Dinah",
    lastName: "Mite",
    email: "kaboomgal@gmail.com",
    imageUrl: "https://thumbs.dreamstime.com/b/happy-young-woman-smiling-girl-white-t-shirt-portrait-happy-young-woman-smiling-girl-white-t-shirt-portrait-136240232.jpg",
    gpa: 3.22,
    campusId: 6,
  });

  console.log(`
        Seeding successful!
      `);
};

module.exports = seed;
