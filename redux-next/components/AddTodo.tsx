"use client";
import { CustomButton } from "@/components";
import { addTodo } from "@/redux/slices";
import { useState } from "react";
import { useDispatch } from "react-redux";
const dispatch = useDispatch;

const AddTodo = () => {
  //   const [state, setState] = useState([]);
  const [todo, setTodo] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addTodo);
    console.log(todo);
  };
  return (
    <div className="">
      <div className="grid justify-center pt-36">
        <h2 className="hero__title">Todo App with Nextjs</h2>
        <p className="hero__subtitle">
          A simple way to track your daily activities
        </p>
        <div className="w-full max-w-xs flex-center">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="add your todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <CustomButton
              title="Add Todo"
              handleClick={handleSubmit}
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
