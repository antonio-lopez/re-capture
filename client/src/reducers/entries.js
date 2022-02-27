import {
  FETCH_ALL,
  FETCH_ENTRY,
  CREATE,
  UPDATE,
  DELETE,
  CLEAR,
} from '../constants/actionTypes';

export const entriesReducer = (state = { entries: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, entries: action.payload };
    case FETCH_ENTRY:
      return { ...state, entry: action.payload };
    case CREATE:
      return { ...state, entries: [...state.entries, action.payload] };
    case UPDATE:
      return {
        ...state,
        entries: state.entries.map((entry) =>
          entry._id === action.payload._id ? action.payload : entry
        ),
      };
    case DELETE:
      return {
        ...state,
        entries: state.entries.filter((entry) => entry._id !== action.payload),
      };
    case CLEAR:
      return { ...state, entries: null, entry: null };
    default:
      return state;
  }
};
