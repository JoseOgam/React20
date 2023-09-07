import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./redux/features/todoSlice";

const List = ({ index, id, title, body }) => {
  const dispatch = useDispatch();
  const removeTodo = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <div>
      <h2>
        {index}. {title}
      </h2>
      <p> {body} </p>
      <button
        onClick={() => {
          removeTodo();
        }}
      >
        delete
      </button>
    </div>
  );
};

export default List;
