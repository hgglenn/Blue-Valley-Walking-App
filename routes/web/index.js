var express = require("express");

var router = express.Router();

console.log("Index");

router.use("/", require("./home"));


module.exports = router;
