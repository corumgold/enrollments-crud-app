const router = require("express").Router();
const { Campus, Student } = require("../db");

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

//POST /students
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Student.create(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
