import React from "react";
import AddTodos from "./components/addTodos";
import ListTodo from "./components/listTodo";

const App = () => {
  return (
    <div>
      <h2>React Todo with Reduxjs/toolkit</h2>
      <AddTodos />
      <ListTodo />
    </div>
  );
};

export default App;
