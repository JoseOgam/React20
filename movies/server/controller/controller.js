const Movies = require("../models/movies");

const addMovies = async (req, res) => {
  const movies = await new Movies(req.body);
  try {
    await movies.save();
    res.status(201).send(res.body);
  } catch (e) {
    res.status(500).json({
      error: true,
      message: "internal server error",
    });
  }
};

const getMovies = async (req, res) => {
  try {
    const movies = await Movies.find({});
    res.status(200).send(movies);
  } catch (e) {
    res.status(400).send(e);
  }
};
module.exports = { addMovies, getMovies };
