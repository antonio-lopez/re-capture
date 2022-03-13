import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Entries from '../Entries/Entries';
import { useDispatch } from 'react-redux';
import { getEntries } from '../../actions/entries';
// import MonthlyInfo from '../MonthlyInfo/MonthlyInfo';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {/* <MonthlyInfo /> */}
      <Entries />
    </div>
  );
};

export default Home;
