import React from 'react';
import { connect } from 'react-redux';
import { categories } from '../constant';
import { createBook } from '../actions/index';
import PropTypes from 'prop-types';

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book))
})

const BooksForm = () => {
  const intialstate = {
    title: '',
    category: categories[0]
  }

  const [state, setstate] = useState(initialState);

  const handleInputChange = event => {
    setstate({
      ...state,
      title: event.target.value,
    })
  }

  const handleSelectChange = event => {
    setstate({
      ...state,
      category: event.target.value,
    })
  }

  const hadnleSubmit = () => {
    if (state.title === '') return;
    createBook({
      ...state,
      id: Math.floor(Math.random() * 100)
    })
    setstate(intialstate);
  }
return (
  <form>
    <div className="form-group">
      <input type="text" onChange={handleInputChange} className="form-control" id="title" placeholder="Title" value={state.title} />
    </div>
    <div className="form-group">
      <select className="form-control" onChange={handleSelectChange} id="category">
        {
        categories.map((category, index) => ( // eslint-disable-next-line react/no-array-index-key
          <option key={index} value={category}>
            {category}
          </option>
        ))
        }
      </select>
    </div>
    <button type="submit" onClick={handleSubmit} className="btn btn-primary">
      Add Book
    </button>
  </form>
);
}

BooksForm.prototype = {
  createBook: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(BooksForm);
