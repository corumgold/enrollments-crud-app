const router = require("express").Router();
const Campus = require("../db/campus");

//GET /campuses
router.get("/", async (req, res, next) => {
  try {
    res.send(await Campus.findAll());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
