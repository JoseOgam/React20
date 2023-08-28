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

module.exports = { addMovies };
