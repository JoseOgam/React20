import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux/features/slice";

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ task: task }));
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add Task"
          value={task}
          onChange={handleTask}
        />
        <input type="submit" placeholder="addTask" />
      </form>
    </div>
  );
};

export default AddTask;
