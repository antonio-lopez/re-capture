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
    <nav className='relative w-full flex flex-wrap items-center justify-between py-4 bg-[#E2E1E7] text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg'>
      <div className='w-full flex flex-wrap items-center justify-between px-16'>
        <div className='flex'>
          <a href='/entries'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </svg>
          </a>
          {/* <span>{user.user.name}</span> */}
        </div>
        <button onClick={logout}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
