//https://jsonplaceholder.typicode.com/users
import { useEffect, useState } from "react";
import axios from "axios";
import Playground from "./components/playground";

const App = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("https://hp-api.onrender.com/").then((res) => {
      const books = res.data;
      console.log(books);
    });
    console.log();
  }, []);
  return (
    <div>
      <div>{post} </div>
      <Playground />
    </div>
  );
};

export default App;
