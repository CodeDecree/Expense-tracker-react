import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((t) => t.amount);
  const income = amounts
    .filter((t) => t > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense = amounts
    .filter((t) => t < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{'$' + income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{'$' + expense.toFixed(2)}</p>
      </div>
    </div>
  );
};
