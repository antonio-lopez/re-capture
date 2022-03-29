import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data: data });
    history.push('/entries');
  } catch (error) {
    return error.response.data.msg;
  }
};

export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data: data });

    history.push('/entries');
  } catch (error) {
    return error.response.data.msg;
  }
};
