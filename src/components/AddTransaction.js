import React, { useState } from "react";

const AddTransaction = ({ onAddTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleAddClick = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    if (!text) {
      return;
    }

    onAddTransaction(newTransaction);

    setAmount(0);
    setText("");
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label for="text">Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        <button onClick={handleAddClick} className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
