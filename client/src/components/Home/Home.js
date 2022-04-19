import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Entries from '../Entries/Entries';
import { useDispatch } from 'react-redux';
import { getEntries } from '../../actions/entries';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

  return (
    <div>
      {user && (
        <div className='h-screen bg-mischka'>
          <Navbar />
          <Entries />
        </div>
      )}
    </div>
  );
};

export default Home;
