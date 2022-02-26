import {
  FETCH_ALL,
  FETCH_ENTRY,
  CREATE,
  UPDATE,
  DELETE,
} from '../constants/actionTypes';
import * as api from '../api/index';

export const getEntries = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEntries();
    dispatch({ type: FETCH_ALL, payload: data });
    console.log('Data:', data);
  } catch (error) {
    console.log(error);
  }
};
export const getEntry = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchEntry(id);
    dispatch({ type: FETCH_ENTRY, payload: data });
    console.log('Single Entry:', data);
  } catch (error) {
    console.log(error);
  }
};
export const createEntry = (newEntry, history) => async (dispatch) => {
  try {
    const { data } = await api.createEntry(newEntry);
    dispatch({ type: CREATE, payload: data });
    history.push(`/entries/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};
