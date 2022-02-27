import React, { useState, useEffect, useCallback } from 'react';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { LOGOUT, CLEAR } from '../../constants/actionTypes';
import { useHistory, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT });
    dispatch({ type: CLEAR });
    history.push('/');
    setUser(null);
  }, [dispatch, history]);

  useEffect(() => {
    const token = user?.token;

    // logout the user after token expires in a hour
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, user?.token, logout]);

  console.log(user);

  return (
    <>
      <h1>Hello {user.user.name} </h1>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Navbar;
