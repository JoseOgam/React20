import ExpenseItems from "./ExpenseItems";

const ExpenseList = () => {
  const expenses = [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 400 },
    { id: 14, name: "car service", cost: 50 },
  ];

  return (
    <div>
      <div>
        {expenses.map((expense) => (
          <div>
            <ExpenseItems
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
