import React from "react";
import AddTodos from "./components/addTodos";
import ListTodo from "./components/listTodo";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold alert alert-primary underline text-center">
        React Reduxjs toolkit
      </h1>
      <AddTodos />
      <ListTodo />
    </div>
  );
};

export default App;
