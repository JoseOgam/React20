const express = require("express");
const { addMovies, getMovies } = require("../controller/controller");

const router = express.Router();

router.post("/addmovie", addMovies);
router.get("/getmovies", getMovies);

module.exports = router;
