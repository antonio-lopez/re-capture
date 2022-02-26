import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Entries from '../Entries/Entries';
import { useDispatch } from 'react-redux';
import { getEntries } from '../../actions/entries';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const createEntry = () => {
    history.push('/createentry');
  };

  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <h1>Home Component</h1>
      <button onClick={createEntry}>Create Entry</button>
      <Entries />
    </>
  );
};

export default Home;
