import React, { useState } from 'react';
import { login, register } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(register(formData, history));
    } else {
      dispatch(login(formData, history));
    }
  };

  const handleChange = (e) => {
    // only update the target fields with their respective names
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <div>
      <h1>Auth component</h1>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <div>
            <label name='name'>Username</label>
            <input
              data-cy='userId'
              type='text'
              name='name'
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div>
          <label name='email'>Email</label>
          <input
            data-cy='userEmail'
            type='email'
            name='email'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label name='password'>Password</label>
          <input
            data-cy='userPassword'
            type='password'
            name='password'
            onChange={handleChange}
            required
          />
        </div>
        <button data-cy='submit' type='submit'>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
        <button data-cy='switchMode' onClick={switchMode}>
          {isSignUp
            ? 'Already have an account? Sign In'
            : "Don't have an account? Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
