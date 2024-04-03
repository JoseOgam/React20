const Budget = () => {
  return (
    <div>
      <div className="flex justify-between rounded bg-slate-400 py-5 px-2  items-center w-96">
        Budget: $4000
        <div>
          <button className=" bg-blue-700 text-white rounded py-1 px-1">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
