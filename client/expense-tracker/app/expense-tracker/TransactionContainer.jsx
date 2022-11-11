'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction';
import TransactionForm from './TransactionForm';
import CategoryBar from './CategoryBar';

const API_URL = 'http://localhost:8080/api/transactions/';

const TransactionContainer = ({ expenses }) => {
  const [transactions, setTransactions] = useState(expenses);

  const handleDelete = async (transactionId) => {
    const response = await fetch(`${API_URL}${transactionId}`, {
      method: 'DELETE',
    });
    if (response.status === 204) {
      setTransactions(transactions.filter((t) => t.transactionId !== transactionId));
    }
  };

  const sortByCategory = (c) => {
    setTransactions([].concat(transactions)
      .sort((a, b) => (a[c] > b[c] ? 1 : -1)));
  };

  return (
    <div className="TransactionContainer">
      <TransactionForm transactions={transactions} setTransactions={setTransactions} />
      <CategoryBar sortByCategory={sortByCategory} />
      {transactions.map((t) => (
        <Transaction
          key={t.transactionId}
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

TransactionContainer.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default TransactionContainer;
