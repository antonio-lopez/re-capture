import React, { useState, useEffect } from 'react';
import { login, register } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit', formData);
    dispatch(login(formData, history));
  };

  const handleChange = (e) => {
    console.log('handleChange', formData);
    // only update the target fields with their respective names
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Auth component</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label name='email'>Email</label>
          <input type='email' name='email' onChange={handleChange} required />
        </div>
        <div>
          <label name='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

export default Auth;
