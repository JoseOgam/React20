import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000/getmovies";
const add_url = "http://localhost:5000/addmovie";

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

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: false,
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
    },
  },
});

const moviesReducers = moviesSlice.reducer;
export default moviesReducers;
