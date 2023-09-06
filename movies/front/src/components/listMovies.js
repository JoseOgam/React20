import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, fetchMovies } from "./store/slice";

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
            <table>
              <tr>
                <th>title</th>
                <th>year</th>
                <th>genre</th>
                <th>ratings</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>{item.name}</td>
                <td>{item.year}</td>
                <td>{item.genre}</td>
                <td>{item.ratings}</td>
                <td>
                  <button onClick={() => dispatch(deleteMovie(item._id))}>
                    delete
                  </button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default ListMovies;
