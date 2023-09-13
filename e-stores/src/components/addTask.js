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
    if (task) {
      dispatch(addTask({ task: task }));
    }
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="addInput"
          type="text"
          placeholder="add Task"
          value={task}
          onChange={handleTask}
        />
        <input className="sub" type="submit" placeholder="addTask" />
      </form>
    </div>
  );
};

export default AddTask;
