import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  //Another way to conditional render JSX
  // This way is used when we are going to change entire JSX
  if (props.expenseList.length === 0) {
    return <p className="expenses-list__fallback">No data found.</p>;
  }
  return (
    <ul className="expenses-list">
      {props.expenseList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
