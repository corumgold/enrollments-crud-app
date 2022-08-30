const router = require("express").Router();
const { Student, Campus } = require("../db");

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
    res.send(await Campus.findByPk(req.params.campusId, { include: Student }));
  } catch (err) {
    next(err);
  }
});

//POST /campuses
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Campus.create(req.body));
  } catch (err) {
    next(err);
  }
});

//DELETE /campuses/:id
router.delete("/:campusId", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId);
    await campus.destroy();
    res.send(campus);
  } catch (err) {
    next(err);
  }
});

//PUT /campuses/:id
router.put('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId);
    res.send(await campus.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
