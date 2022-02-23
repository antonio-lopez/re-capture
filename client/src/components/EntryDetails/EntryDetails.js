import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEntry } from '../../actions/entries';

const EntryDetails = () => {
  const { entry } = useSelector((state) => state.entriesReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getEntry(id));
  }, [id, dispatch]);

  if (!entry) return null;

  return (
    <div>
      EntryDetails
      <h1>{entry.title}</h1>
      <div>{new Date(entry.createdAt).toDateString()}</div>
      <div>{entry.message}</div>
    </div>
  );
};

export default EntryDetails;
