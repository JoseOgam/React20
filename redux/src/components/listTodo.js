import { useSelector, useDispatch } from "react-redux";
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
import { deleteTodo, editTodo } from "../store/reducer/todoSlice";
import { useState } from "react";

const ListTodo = () => {
  const { todoList } = useSelector((state) => state.TODO);
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [state, setState] = useState({
    id: "",
    content: "",
    contentError: null,
  });
  const onEditToggle = (id, content) => {
    setEditing(true);
    setState({ ...state, id, content });
  };

  return (
    <div>
      {
        <ul className="todos">
          {todoList.map(({ id, content }) => {
            return (
              <li className="grid" key={id}>
                <span className="content">{content}</span>
                <span className="todo-action">
                  <AiOutlineCloseCircle
                    className="close"
                    onClick={() => dispatch(deleteTodo({ id }))}
                  />
                  <AiFillEdit
                    className="edit"
                    onClick={() => onEditToggle(id, content)}
                  />
                </span>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};
export default ListTodo;
