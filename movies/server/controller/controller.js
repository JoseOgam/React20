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
    const getmovies = await Movies.find({});
    res.status(200).send(getmovies);
  } catch (e) {
    res.status(400).send(e);
  }
};

const getOne = async (req, res) => {
  try {
    const getone = await Movies.findById(req.params.id);
    res.status(200).send(getone);
  } catch (error) {
    return error.message;
  }
};

const upDate = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const option = { new: true };
    const update = await Movies.findByIdAndUpdate(id, updatedData, option);
    res.status(200).send(update);
  } catch (error) {}
};
module.exports = { addMovies, getMovies, getOne, upDate };
