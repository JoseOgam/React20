import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../features/task/taskSlice";

const ListTask = () => {
  const task = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {task.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
            <button onClick={() => dispatch(toggleTask(task.id))}>
              {task.completed ? `undo` : `complete`}{" "}
            </button>
            <button onClick={() => dispatch(deleteTask(task.id))}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
