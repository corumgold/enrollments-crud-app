const router = require("express").Router();
const { Student } = require("../db");
const Campus = require("../db/campus");

//GET /campuses
router.get("/", async (req, res, next) => {
  try {
    res.send(await Campus.findAll({ include: Student }));
  } catch (err) {
    next(err);
  }
});

//GET /campuses/:id
router.get("/:campusId", async (req, res, next) => {
  try {
    res.send(await Campus.findByPk({ include: Student }));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
