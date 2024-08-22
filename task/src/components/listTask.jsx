import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../features/task/taskSlice";

const ListTask = () => {
  const task = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="pt-4">
      <ul>
        {task.map((task, index) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            className="flex justify-evenly items-center"
          >
            {index + 1}. {task.text}
            <div className=" space-x-2 space-y-2">
              <button
                type="button"
                className=" px-1 py-1 bg-lime-400 rounded-md "
                onClick={() => dispatch(toggleTask(task.id))}
              >
                {task.completed ? `undo` : `complete`}{" "}
              </button>
              <button
                className=" px-1 py-1 bg-red-400 rounded-md "
                onClick={() => dispatch(deleteTask(task.id))}
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
