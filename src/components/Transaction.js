import React from "react";

const Transaction = ({ item }) => {
  const sign = item.amount < 0 ? "-" : "+";
  return (
    <li className={item.value < 0 ? "minus" : "positive"}>
      {item.text}
      <span>
        {sign}${Math.abs(item.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
