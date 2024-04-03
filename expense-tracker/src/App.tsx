import { Budget, Remaining, Spent } from "./components";

const App = () => {
  return (
    <div>
      <div className="flex  items-center justify-center underline">
        <h1 className=" font-extrabold">My Budget Planner App</h1>
      </div>
      <div className="flex items-center justify-evenly pt-8">
        <Budget />
        <Remaining />
        <Spent />
      </div>
    </div>
  );
};

export default App;
