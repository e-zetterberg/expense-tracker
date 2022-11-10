"use client";
import React, {useState, useEffect} from "react";
import Transaction from "./Transaction";
import TransactionForm from "./TransactionForm";

const API_URL = 'http://localhost:8080/api/transactions/'

const TransactionContainer = ({expenses}) => {
   const [transactions, setTransactions] = useState(expenses);

  const handleDelete = async (transactionId) => {
    setTransactions(transactions.filter(t => t.transactionId !== transactionId));
    try {
      const response = await fetch(`${API_URL}${transactionId}`, {
            method: 'DELETE',
        })
        console.log(response.status);
    } catch (error) {
        console.log(error);
        return;
    }
  };

  return(
        <div className="TransactionContainer">
            <TransactionForm transactions={transactions} setTransactions={setTransactions}/>
            <div></div>
            {transactions.map((t, index) => (
                <Transaction 
                    key={index}
                    id={t.transactionId}
                    date={t.date}
                    amount={t.amount}
                    category={t.category}
                    description={t.description}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default TransactionContainer;
