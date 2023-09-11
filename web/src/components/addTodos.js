import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/features/todoSlice";

const AddTodos = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const storeTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: title, body: body }));
    setTitle("");
    setBody("");
  };
  return (
    <div>
      <div>
        <form className="w-full max-w-sm" onSubmit={storeTodo}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodos;
