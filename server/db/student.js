const Sequelize = require("sequelize");
const db = require("./database");

module.exports = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://static.wixstatic.com/media/11b692_f2c60859454d4df5b14d62f4814ab5d0~mv2.jpg/v1/fill/w_905,h_1252,al_c,q_85/11b692_f2c60859454d4df5b14d62f4814ab5d0~mv2.jpg",
  },
  gpa: {
    //this allows numbers with up to 3 digits, 2 of which can be after the decimal (e.g. 3.67)
    type: Sequelize.DECIMAL(3, 2),
    validate: {
      max: 4.0,
      min: 0.0,
    },
  },
});
