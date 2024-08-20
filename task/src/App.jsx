import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTask from "./components/addTask";

function App() {
  return (
    <>
      <div>
        <h3>Keep tarck of your work!</h3>
        <div>
          <AddTask />
        </div>
      </div>
    </>
  );
}

export default App;
