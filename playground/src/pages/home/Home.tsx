import { useState } from "react";

const Home = () => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      console.log("task added:", task);
      setTask("");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to the Home Page!</h1>
      <div className="mt-4">
        <input
          placeholder="Enter your task here..."
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={handleAddTask}
          className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Home;
