import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDaraHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    console.log(expense);
    props.addNewExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDaraHandler} />
    </div>
  );
};

export default NewExpense;
