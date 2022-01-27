import React, { useState, useEffect } from 'react';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push('/auth');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    // logout the user after token expires in a hour
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, user?.token]);

  return (
    <>
      <h1>Hello {user.user.name} </h1>

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button component={Link} to='/auth'>
          Sign In
        </button>
      )}
    </>
  );
};

export default Navbar;
