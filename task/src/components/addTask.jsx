import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";

const AddTask = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handeSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTask(input));
      setInput("");
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="add your task..."
        />
        <button onClick={handeSubmit}>add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
