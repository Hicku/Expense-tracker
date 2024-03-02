import { useState } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactionsData, setTransactionsData] = useState([]);

  const addNewTransaction = (item) => {
    setTransactionsData((transactionsData) => [...transactionsData, item]);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList transactionsData={transactionsData} />
        <AddTransaction
          transactionsData={transactionsData}
          setTransactionsData={setTransactionsData}
          onAddTransaction={addNewTransaction}
        />
      </div>
    </div>
  );
}

export default App;
