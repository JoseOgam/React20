import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit, remove } from "../assets";
import { removeTodo } from "../redux/todoSlice";

const ListTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleDelete = (id) => {
    console.log("delete");
    dispatch(removeTodo({ id }));
  };

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <section className="w-full justify-center items-center pt-10">
      <div className="flex-row justify-center">
        {todos.map((item, index) => (
          <div
            key={item.id}
            className="flex-col items-center justify-center mb-3"
          >
            <div>
              <h3>
                <div className="flex items-center gap-y-2 gap-96">
                  <div>{index + 1}. </div>
                  <div> {item.todo}</div>
                </div>
              </h3>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-600 rounded"
              >
                <img src={remove} className="object-contain w-10 h-5 py-1" />
              </button>
              <button className="bg-green-700 rounded">
                <img src={edit} className="w-10 h-5 object-contain py-1" />
              </button>
              <input
                type="checkbox"
                // id={}
                // You can add more attributes and handlers for the checkbox as needed
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListTodos;
