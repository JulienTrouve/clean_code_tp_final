var express = require('express');
var router = express.Router();
const randomController = require("../controllers/random.controller");

//récupération du controller de la route
router.get(
  '/Randomize', 
  randomController.getRandomInt
);

module.exports = router;