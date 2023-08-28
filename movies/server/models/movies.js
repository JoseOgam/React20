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
    required: false,
  },
  genre: {
    type: [String],
    required: false,
  },
  ratings: {
    type: Number,
    required: false,
  },
});

const Movies = mongoose.model("movies", moviesSchema);
module.exports = Movies;
