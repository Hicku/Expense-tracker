import { useEffect, useState } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactionsData, setTransactionsData] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const addNewTransaction = (item) => {
    setTransactionsData((transactionsData) => [...transactionsData, item]);
    if (item.amount < 0) {
      setExpense(expense + item.amount);
    } else {
      setIncome(income + item.amount);
    }
  };

  const deleteTransaction = (id, amount) => {
    setTransactionsData((transactionsData) =>
      transactionsData.filter((item) => item.id !== id)
    );

    if (amount < 0) {
      // If the deleted transaction was an expense, subtract its absolute value from the current expense
      setExpense((prevExpense) => prevExpense + Math.abs(amount));
    } else {
      setIncome((prevIncome) => prevIncome - amount);
    }
  };

  useEffect(() => {
    const newBalance = () => {
      setBalance(income - Math.abs(expense));
    };

    newBalance();
  }, [income, expense]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance balance={balance} />
        <IncomeExpenses income={income} expense={expense} />
        <TransactionList
          transactionsData={transactionsData}
          onDeleteTransaction={deleteTransaction}
        />
        <AddTransaction
          transactionsData={transactionsData}
          setTransactionsData={setTransactionsData}
          onAddTransaction={addNewTransaction}
          setExpense={setExpense}
          setIncome={setIncome}
        />
      </div>
    </div>
  );
}

export default App;
