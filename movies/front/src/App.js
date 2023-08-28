import "./App.css";
import ListMovies from "./components/listMovies";
import PostMovies from "./components/postMovies";

const App = () => {
  return (
    <div>
      <div className="main">
        <PostMovies />
        <ListMovies />
      </div>
    </div>
  );
};

export default App;
