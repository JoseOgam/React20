import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "./redux/features/slice";

const Task = ({ task, id, index }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask({ id: id }));
    console.log(id);
  };
  return (
    <div>
      <div className="task">
        <h3>{index} </h3>
        <h3> {task} </h3>
        <div className="actions">
          <button className="delete" onClick={handleDelete}>
            delete
          </button>
          <button className="update">update</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
