import { CREATE_BOOK, REMOVE_BOOK } from "../constant";

export const createBook = (book) => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});
