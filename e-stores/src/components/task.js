import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "./redux/features/slice";

const Task = ({ task, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask({ id: id }));
    console.log(id);
  };
  return (
    <div>
      <div>
        <h1> {task} </h1>
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
};

export default Task;
