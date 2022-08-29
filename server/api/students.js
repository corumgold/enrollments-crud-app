const router = require("express").Router();
const { Campus } = require("../db");
const Student = require("../db/student");

//GET /students
router.get("/", async (req, res, next) => {
  try {
    res.send(await Student.findAll({ include: Campus }));
  } catch (err) {
    next(err);
  }
});

//GET /students/:id
router.get("/:studentId", async (req, res, next) => {
  try {
    res.send(await Student.findByPk({ include: Campus }));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
