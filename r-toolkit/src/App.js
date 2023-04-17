import Todos from "./components/addTodo";
import ListTodo from "./components/listTodo";
import './App.css'

function App() {
  return (
    <div className="body">
      <h2>Todo App</h2>
      <Todos />
      <ListTodo />
    </div>
  );
}

export default App;
