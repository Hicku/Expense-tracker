import React from "react";

const Transaction = ({ item, onDeleteTransaction }) => {
  const sign = item.amount < 0 ? "-" : "+";
  return (
    <li className={item.amount < 0 ? "minus" : "plus"}>
      {console.log(item.amount)}
      {item.text}
      <span>
        {sign}${Math.abs(item.amount)}
      </span>
      <button
        onClick={() => onDeleteTransaction(item.id, item.amount)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
