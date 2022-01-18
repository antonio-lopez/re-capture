import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log(data);
    dispatch({ type: AUTH, data: data });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data: data });

    history.push('/');
  } catch (error) {
    console.log('error in actions/ auth');
    console.log(error);
  }
};
