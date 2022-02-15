import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Entries from '../Entries/Entries';
import { useDispatch } from 'react-redux';
import { getEntries } from '../../actions/entries';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <h1>Home Component</h1>
      <Entries />
    </>
  );
};

export default Home;
