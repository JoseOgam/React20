import type { RootState } from "../services/store";
import { useDispatch, useSelector } from "react-redux";

const Task = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const handleDeletetask = (id: string) => {
    // Implementation for deleting a task
    dispatch({ type: "tasks/deleteTask", payload: id });
    console.log(`Delete task with id: ${id}`);
  };
  return (
    <div className="flex flex-col items-center justify-center pt-8 bg-gray-100">
      {/* <h1 className="text-3xl font-bold">Task List</h1> */}
      <div>
        {tasks.map((task: any, index: number) => (
          <div
            key={task.id}
            className="flex justify-between items-center gap-20 border border-gray-300 rounded-md py-2 px-4 mb-2"
          >
            <p className="text-lg">
              {" "}
              {index + 1}. {task.title}
            </p>
            <button
              onClick={() => handleDeletetask(task.id)}
              className="border rounded-md bg-red-500 text-white py-1 px-3 hover:bg-red-600"
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
