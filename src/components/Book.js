import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, category } = book;

  return (
    <div className="Book-Panel">
      <div className="book-information">
        <div className="book-category">
          {category}
        </div>
        <div className="book-title">
          {title}
        </div>
        <div className="book-author">
          Hemant Soni
        </div>
        <div className="book-buttons">
          <div>Comments</div>
          <div>|</div>
          <div role="button" tabIndex="-2" className="remove">Remove</div>
          <div>|</div>
          <div>Edit</div>
        </div>
      </div>
      <div className="completion">
        <div className="Oval-2" />
        <div>
          <div className="Percent-Complete">100%</div>
          <div className="Completed">Completed</div>
        </div>
      </div>
      <div className="chapter">
        <div className="Current-Chapter">
          CURRENT CHAPTER
        </div>
        <div className="Current-Lesson">
          Chapter 17
        </div>
        <div className="Rectangle-2">
          UPDATE PROGRESS
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  // handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
