import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./store/slice";

const ListMovies = () => {
  const { movies, loading } = useSelector((status) => status.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return <div>ListMovies</div>;
};

export default ListMovies;
