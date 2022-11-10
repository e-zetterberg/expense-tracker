"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

let nextId = 1;
const TransactionForm = ({ transactions, setTransactions }) => {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    
    const transaction = {
      transactionId: nextId,
      date: date.toLocaleDateString(),
      amount,
      description,
      category,
    };
    
    setTransactions(transactions.concat(transaction));
    setAmount("");
    setDescription("");
    const response = fetch("http://localhost:8080/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    });
    console.log(JSON.stringify(transaction));
    nextId += 1;
  };
  
  const categories = ["food", "health", "transportation", "shopping", "travel", "utilities", "subscriptions", "other"];
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form--input-container">
          <DatePicker 
            selected={date} 
            onChange={(date) => setDate(date)}
          />
          <input
            className="transaction-input"
            placeholder="amount"
            id="transaction-input-amount"
            type="number"
            value={amount}
            required={true}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            className="transaction-input"
            placeholder="description"
            id="transaction-input-description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select 
            className="category-select" 
            required={true}
            onChange={(e) => setCategory(e.target.value)}
            id="">
            <option value="">--Select a category--</option>
            {categories.map((c, index) => (
              <option key={index}>{c}</option>
            ))}
          </select>
          <button className="btn btn--add" type="submit">
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
