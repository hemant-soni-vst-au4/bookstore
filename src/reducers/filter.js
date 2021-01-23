import { CHANGE_FILTER } from '../constant';

const filter = (state = 'Categories', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;
