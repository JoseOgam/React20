const AddExpenseForm = () => {
  return (
    <div>
      <div className="flex  justify-center w-full pb-4">
        <form className=" max-w-sm">
          <div className="flex flex-col">
            <span>Expense</span>
            <input className=" border border-black rounded" type="text" />
          </div>
          <div className="flex flex-col">
            <span>Cost</span>
            <input className=" border border-black rounded" type="text" />
          </div>
          <div className="flex items-center justify-center pt-4">
            <button className=" bg-blue-700 py-1 px-2 w-1/2 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseForm;
