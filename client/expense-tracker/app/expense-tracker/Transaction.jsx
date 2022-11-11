'use client';

import React from 'react';
import PropTypes from 'prop-types';

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

Transaction.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default Transaction;
