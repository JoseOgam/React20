import React from "react";
import { useSelector } from "react-redux";

import Task from "./task";

const ListTasks = () => {
  const tasks = useSelector((state) => {
    return state.tasks;
  });

  return (
    <div>
      <div>
        {tasks.map((item) => (
          <Task key={item.id} task={item.task} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ListTasks;
