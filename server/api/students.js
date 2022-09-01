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
    res.send(await Student.findByPk(req.params.studentId, { include: Campus }));
  } catch (err) {
    next(err);
  }
});

//POST /students
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body)
    res.status(201).send(await Student.create(req.body));
  } catch (err) {
    next(err);
  }
});

//GET /students/:id
router.delete("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    await student.destroy();
    res.send(student);
  } catch (err) {
    next(err);
  }
});

//PUT /students/:id
router.put("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    res.send(await student.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
