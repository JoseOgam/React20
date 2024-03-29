import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { toast } from "react-hot-toast";

const Demo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todod"));
    if (storedTodos) {
      setTodo(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const notify = () => toast.success("Todo successfully added");
  const notifyError = () => toast.error("Please add Todo");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length === 0) {
      notifyError();
    } else {
      dispatch(addTodo({ newTodo: todo }));
      notify();
    }
    setTodo("");
  };

  return (
    <section className="w-full mt-16 max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form className="grid justify-center items-center gap-5">
          <input
            value={todo}
            onChange={handleOnChange}
            type="text"
            placeholder="write your todo..."
          />
          <button
            onClick={handleSubmit}
            type="button"
            className="bg-pink-900 rounded"
          >
            add
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
