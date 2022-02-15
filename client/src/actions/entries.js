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
