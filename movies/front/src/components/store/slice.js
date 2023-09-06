import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/movies/getmovies";
const add_url = "http://localhost:5000/movies/addmovie";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await axios.get(url);
    return [...response.data];
  } catch (e) {
    return e.message;
  }
});

export const addMovies = createAsyncThunk(
  "movies/addMovies",
  async (movies) => {
    try {
      const response = await axios.post(add_url, movies);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovies",
  async (_id) => {
    // console.log(_id);
    try {
      await axios.delete(`http://localhost:5000/movies/delete/${_id}`);
      return { _id };
    } catch (error) {
      return error.message;
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: false,
    error: null,
  },
  reducers: {
    postMovies: () => {},
    listMovies: () => {},
  },
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.status = false;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.status = true;
      state.movies = action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = false;
    },
    [addMovies.fulfilled]: (state, action) => {
      state.movies.concat(action.payload);
      // console.log("added");
    },
    [deleteMovie.pending]: (state, action) => {
      state.status = true;
      // console.log("false");
    },
    [deleteMovie.fulfilled]: (state, action) => {
      state.status = false;
      const { _id } = action.payload;
      if (_id) {
        state.movies = state.movies.filter((item) => item._id !== _id);
        // console.log("deleted");
      }
    },
    [deleteMovie.rejected]: (state, action) => {
      state.status = false;
      state.error = action.payload;
    },
  },
});

const moviesReducers = moviesSlice.reducer;
export default moviesReducers;
