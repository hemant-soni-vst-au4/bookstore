import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../constants';

const CategoryFilter = ({
  filter,
  handleFilterSelect,
}) => {
  let allCategories = [filter, 'All', ...categories];
  allCategories = [...new Set(allCategories)];

  return (
    <select onChange={event => { handleFilterSelect(event.target.value); }}>
      {
        allCategories.map(category => (
          <option key={Date.now()} value={category}>{category}</option>
        ))
      }
    </select>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterSelect: PropTypes.func.isRequired,
};

export default CategoryFilter;