import {
  Budget,
  ExpenseList,
  ExpenseTotal,
  Remaining,
  Spent,
} from "./components";

const App = () => {
  return (
    <div>
      <div className="flex  items-center justify-center underline">
        <h1 className=" font-extrabold">My Budget Planner App</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly pt-8">
        <span className="mb-4 md:mb-0 mr-4">
          <Budget />
        </span>
        <span className="mb-4 md:mb-0 md:mx-4">
          <Remaining />
        </span>
        <span>
          <Spent />
        </span>
      </div>
      <div>
        <ExpenseTotal />
      </div>
      <div>
        <ExpenseList />
      </div>
    </div>
  );
};

export default App;
