import { useState } from "react";
import { useDispatch } from "react-redux";
import "./post.css";
import { addMovies } from "./store/slice";

const PostMovies = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [ratings, setRatings] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleImg = (e) => setImg(e.target.value);
  const handleYear = (e) => setYear(e.target.value);
  const handleGenre = (e) => setGenre(e.target.value);
  const handleRatings = (e) => setRatings(e.target.value);

  const addMovie = (e) => {
    e.preventDefault();
    dispatch(
      addMovies({
        name: name,
        img: img,
        year: year,
        genre: genre,
        ratings: ratings,
      })
    );
    setName("");
    setImg("");
    setYear("");
    setGenre("");
    setRatings("");
  };

  return (
    <div>
      <form onSubmit={addMovie}>
        <input placeholder="movie name" value={name} onChange={handleName} />
        <input placeholder="image" value={img} onChange={handleImg} />
        <input placeholder="year" value={year} onChange={handleYear} />
        <input placeholder="genre" value={genre} onChange={handleGenre} />
        <input placeholder="ratings" value={ratings} onChange={handleRatings} />
        <input type="submit" placeholder="post" />
      </form>
    </div>
  );
};

export default PostMovies;
