import React from "react";

const IncomeExpenses = ({ expense, income }) => {
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{expense}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
