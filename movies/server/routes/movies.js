const express = require("express");
const { addMovies, getMovies, getOne } = require("../controller/controller");

const router = express.Router();

router.post("/addmovie", addMovies);
router.get("/getmovies", getMovies);
router.get("/getone/:id", getOne);

module.exports = router;
