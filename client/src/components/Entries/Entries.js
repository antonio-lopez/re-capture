import React, { useEffect } from 'react';
// import { FETCH_ALL } from '../../constants/actionTypes';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Entry from './Entry/Entry';
// import { getEntries } from '../../actions/entries';

const Entries = () => {
  // const dispatch = useDispatch();
  const { entries } = useSelector((state) => state.entriesReducer);
  // const { authData } = useSelector((state) => state.authReducer);

  // useEffect(() => {
  //   dispatch(getEntries());
  // }, [dispatch]);
  // const entries = useSelector((state) => state.entries);
  // console.log(entries);

  // // useEffect(() => {
  // //   dispatch({ type: FETCH_ALL });
  // // }, []);
  // if (!entries.length) {
  //   console.log('no entries');
  // }
  // console.log(
  //   'Entries: ',
  //   entries.map((entry) => entry)
  // );
  console.log('entry', entries);
  // console.log('User: ', authData.user.name);

  return (
    <div>
      <h1>Entries Component</h1>
      {entries.map((entry) => (
        <Entry entry={entry} />
      ))}
    </div>
  );
};

export default Entries;
