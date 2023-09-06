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
        <form onSubmit={storeTodo}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddTodos;
