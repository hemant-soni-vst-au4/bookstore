import React from 'react';
import { connect } from 'react-redux';
import { categories } from '../constant';

const BooksForm = () => (
  <form>
    <div className="form-group">
      <input type="text" className="form-control" id="title" placeholder="Title" />
    </div>
    <div className="form-group">
      <select className="form-control" id="category">
        {
        categories.map((category, index) => ( // eslint-disable-next-line react/no-array-index-key
          <option key={index} value={category}>
            {category}
          </option>
        ))
        }
      </select>
    </div>
    <button type="submit" className="btn btn-primary">
      Add Book
    </button>
  </form>
);

export default connect(null, null)(BooksForm);
