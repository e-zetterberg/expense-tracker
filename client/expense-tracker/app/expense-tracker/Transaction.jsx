'use client';

import React from 'react';

const Transaction = ({
  id, date, amount, description, category, handleDelete,
}) => (
  <div>
    <div className="transaction">

      <div className="transaction--data">
        {date}
      </div>
      <div className="transaction--data">
        -
        {' '}
        {amount}
        kr
      </div>
      <div className="transaction--data">
        {description}
      </div>
      <div className="transaction--data">
        {category}
      </div>
      <button type="button" className="btn btn--remove" onClick={() => handleDelete(id)}>X</button>
    </div>
  </div>
);

export default Transaction;
