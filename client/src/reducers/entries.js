import {
  FETCH_ALL,
  FETCH_ENTRY,
  CREATE,
  UPDATE,
  DELETE,
} from '../constants/actionTypes';
// export const entriesReducer = (entries = [], action) => {
//   switch (action.type) {
//     case FETCH_ALL:
//       return action.payload;

//     default:
//       return entries;
//   }
export const entriesReducer = (state = { entries: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, entries: action.payload };
    case FETCH_ENTRY:
      return { ...state, entry: action.payload };
    case CREATE:
      return { ...state, entries: [...state.entries, action.payload] };
    default:
      return state;
  }
};
