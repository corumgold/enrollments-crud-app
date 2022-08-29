const router = require("express").Router();
const Student = require("../db/student");

//GET /students
router.get("/", async (req, res, next) => {
  try {
    res.send(await Student.findAll());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
