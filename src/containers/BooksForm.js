import React from 'react';
import { connect } from 'react-redux';
import { categories } from '../constant';

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
    <button type="submit" className="btn btn-primary">
      Add Book
    </button>
  </form>
);
}
export default connect(null, null)(BooksForm);
