import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { categories } from '../constant';
import { createBook } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

const BooksForm = ({
  createBook,
}) => {
  const intialstate = {
    title: '',
    category: categories[0],
  };

  const [state, setstate] = useState(intialstate);

  const handleChange = event => {
    event.preventDefault();
    setstate({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.title === '') return;
    createBook({
      ...state,
      id: Date.now(),
    });
    setstate(intialstate);
  };

  return (
    <form>
      <div className="form-group">
        <input type="text" onChange={handleChange} name="title" className="form-control" id="title" placeholder="Title" value={state.title} />
      </div>
      <div className="form-group">
        <select className="form-control" name="category" onChange={handleChange} id="category">
          {
        categories.map((category, index) => ( // eslint-disable-next-line react/no-array-index-key
          <option key={index} value={category}>
            {category}
          </option>
        ))
        }
        </select>
      </div>
      <button type="button" onClick={handleSubmit} className="btn btn-primary">
        Add Book
      </button>
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(BooksForm);
