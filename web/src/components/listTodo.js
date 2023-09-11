import React from "react";
import { useSelector } from "react-redux";

import List from "./list";

const ListTodo = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <div>
      {todos.map((todo, index) => (
        <List
          key={index}
          title={todo.title}
          body={todo.body}
          id={todo.id}
          index={index + 1}
        />
      ))}
    </div>
  );
};

export default ListTodo;
