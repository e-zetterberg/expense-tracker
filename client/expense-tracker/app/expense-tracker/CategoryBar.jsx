/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const CategoryBar = ({ sortByCategory }) => {
  const categories = ['date', 'amount', 'description', 'category'];

  return (
    <div className="field-buttons">
      {categories.map((c, index) => (
        <button onClick={() => sortByCategory(c)} key={index} type="button">{c}</button>
      ))}
    </div>

  );
};

CategoryBar.propTypes = {
  sortByCategory: PropTypes.func.isRequired,
};

export default CategoryBar;
