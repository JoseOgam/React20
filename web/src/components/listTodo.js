import React from "react";
import { useSelector } from "react-redux";

const ListTodo = () => {
  const { todos, loading } = useSelector((state) => state.todos);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      {todos.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <table>
                <tr>
                  <th>ID</th>
                  <th>TODOS</th>
                  <th>ACTIONS</th>
                </tr>
                <tr>
                  <td> {index + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <button>Delete</button>
                    <button>update</button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTodo;
