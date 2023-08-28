const express = require("express");
const { addMovies } = require("../controller/controller");

const router = express.Router();

router.post("/addmovie", addMovies);

module.exports = router;
