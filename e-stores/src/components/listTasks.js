import React from "react";
import { useSelector } from "react-redux";

import Task from "./task";

const ListTasks = () => {
  const tasks = useSelector((state) => {
    return state.tasks;
  });

  return (
    <div className="display">
      <div className="titles">
        <h1>ID</h1>
        <h1>TASK</h1>
        <h1>ACTIONS</h1>
      </div>
      <div>
        {tasks.map((item, index) => (
          <Task key={item.id} task={item.task} id={item.id} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default ListTasks;
