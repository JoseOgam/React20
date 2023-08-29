import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./store/slice";

const ListMovies = () => {
  const { movies, loading } = useSelector((status) => status.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {" "}
      {movies.map((item, id) => {
        return (
          <div key={id}>
            <h2>{item.name}</h2>
            <p> {item.genre} </p>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default ListMovies;
