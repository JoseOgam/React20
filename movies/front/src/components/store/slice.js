import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "";
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await axios.get(url);
    return [...response.data];
  } catch (e) {
    return e.message;
  }
});
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
      (state.status = true), (state.movies = action.payload);
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = false;
    },
  },
});

const moviesReducers = moviesSlice.reducer;
export default moviesReducers;
