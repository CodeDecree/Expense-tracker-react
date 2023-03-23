import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTrasaction } from "./components/AddTrasaction";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTrasaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
