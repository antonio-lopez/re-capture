import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEntry, deleteEntry } from '../../actions/entries';

const EntryDetails = () => {
  const { entry } = useSelector((state) => state.entriesReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getEntry(id));
  }, [id, dispatch]);

  const removeEntry = (singleEntry) => {
    dispatch(deleteEntry(singleEntry));
    history.push('/entries');
  };

  if (!entry) return null;

  return (
    <div>
      EntryDetails
      <div>
        <h1>{entry.title}</h1>
        <div>{new Date(entry.createdAt).toDateString()}</div>
        <div>{entry.message}</div>
      </div>
      <button>Edit</button>
      <button onClick={() => history.push('/')}>Home</button>
      <button onClick={() => removeEntry(id)}>Delete</button>
    </div>
  );
};

export default EntryDetails;
