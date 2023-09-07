import React from "react";
import { useSelector } from "react-redux";

import List from "./list";

const ListTodo = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <div>
      <div>
        <div>
          <div>
            <button className="btn btn-success">ADD +</button>
          </div>
          {todos.map((item, index) => (
            <List
              key={index}
              title={item.title}
              body={item.body}
              id={item.id}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTodo;
