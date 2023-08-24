const mongoose = require("mongoose");
require("../dbConnect");

const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
});

const movies = mongoose.model("movies", moviesSchema);
module.exports = movies;
