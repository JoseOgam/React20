import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTask from "./components/addTask";
import ListTask from "./components/listTask";

function App() {
  return (
    <>
      <div>
        <h3 className=" font-extrabold underline pb-4">
          Keep tarck of your work!
        </h3>
        <div>
          <AddTask />
        </div>
        <div>
          <ListTask />
        </div>
      </div>
    </>
  );
}

export default App;
