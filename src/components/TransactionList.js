import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactionsData, onDeleteTransaction }) => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactionsData.map((item) => (
          <Transaction
            key={item.id}
            item={item}
            onDeleteTransaction={onDeleteTransaction}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
