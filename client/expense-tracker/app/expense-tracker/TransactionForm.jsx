/* eslint-disable react/no-array-index-key */

'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

let nextId = 1;
const TransactionForm = ({ transactions, setTransactions }) => {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transaction = {
      transactionId: nextId,
      date: date.toLocaleDateString(),
      amount,
      description,
      category,
    };

    nextId += 1;
    try {
      const response = await fetch('http://localhost:8080/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      });
      if (response.status !== 201) {
        return;
      }
    } catch (error) {
      return;
    }
    setTransactions(transactions.concat(transaction));

    setAmount('');
    setDescription('');
  };

  const categories = ['food', 'health', 'transportation', 'shopping', 'travel', 'utilities', 'subscriptions', 'other'];

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form--input-container">
          <DatePicker
            className="datepicker"
            selected={date}
            onChange={(d) => setDate(d)}
          />
          <input
            className="transaction-input"
            placeholder="amount"
            id="transaction-input-amount"
            type="number"
            value={amount}
            required
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
            className="transaction-input category-select"
            required
            onChange={(e) => setCategory(e.target.value)}
            id=""
          >
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

TransactionForm.propTypes = {
  transactions: PropTypes.arrayOf(Object).isRequired,
  setTransactions: PropTypes.func.isRequired,
};

export default TransactionForm;
