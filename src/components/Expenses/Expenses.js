import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredExpenseYear, setFilteredExpenseYear] = useState("2020");

  const filteredYearHandler = (filteredYear) => {
    console.log(filteredYear);
    setFilteredExpenseYear(filteredYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredExpenseYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredExpenseYear}
          onChangeFilterYear={filteredYearHandler}
        />
        <ExpensesList expenseList={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
