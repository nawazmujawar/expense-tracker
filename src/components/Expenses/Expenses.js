import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredExpenseYear, setFilteredExpenseYear] = useState("2020");

  const filteredYearHandler = (filteredYear) => {
    console.log(filteredYear);
    setFilteredExpenseYear(filteredYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredExpenseYear;
  });

  let expenseContent = <p> No expense data found</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredExpenseYear}
          onChangeFilterYear={filteredYearHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses;
