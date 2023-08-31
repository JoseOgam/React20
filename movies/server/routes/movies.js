const express = require("express");
const {
  addMovies,
  getMovies,
  getOne,
  upDate,
} = require("../controller/controller");

const router = express.Router();

router.post("/addmovie", addMovies);
router.get("/getmovies", getMovies);
router.get("/getone/:id", getOne);
router.patch("/update/:id", upDate);

module.exports = router;
