import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactionsData }) => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactionsData.map((item) => (
          <Transaction key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
