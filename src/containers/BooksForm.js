import React from "react";
import { connect } from "react-redux";

const categories = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi",
];
const BooksForm = () => (
  <form>
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" placeholder="Title" />
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Example select</label>
      <select class="form-control" id="exampleFormControlSelect1">
        {categories.map((category, index) => {
          <option key={index} value={category}>
            {category}
          </option>;
        })}
      </select>
    </div>
    <button type="submit" class="btn btn-primary">
      Submit
    </button>
  </form>
);

export default connect(null, null)(BooksForm);
