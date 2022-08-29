const router = require("express").Router();

router.use('/campuses', require('./campuses'))

module.exports = router;
