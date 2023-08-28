import React from "react";
import "./post.css";

const PostMovies = () => {
  return (
    <div>
      <form>
        <input placeholder="movie name" />
        <input placeholder="image" />
        <input placeholder="year" />
        <input placeholder="genre" />
        <input placeholder="retings" />
        <input type="submit" placeholder="post" />
      </form>
    </div>
  );
};

export default PostMovies;
