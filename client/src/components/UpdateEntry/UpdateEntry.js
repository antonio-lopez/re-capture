import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEntry, updateEntry } from '../../actions/entries';
import { useHistory, useParams } from 'react-router-dom';

const UpdateEntry = () => {
  const [entryData, setEntryData] = useState({
    title: '',
    message: '',
    selectedFile: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { entry } = useSelector((state) => state.entriesReducer);

  useEffect(() => {
    dispatch(getEntry(id));
  }, [id, dispatch]);

  console.log('Form entry fetched: ', entry);

  useEffect(() => {
    if (entry) setEntryData(entry);
  }, [entry]);

  console.log('SetEntryData: ', entryData);

  const handleCancel = (e) => {
    e.preventDefault();
    history.push(`/entries/${id}`);
    clear();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEntry(id, entryData, history));
    clear();
  };

  const handleChange = (e) => {
    setEntryData({ ...entryData, [e.target.name]: e.target.value });
  };

  const clear = () => {
    setEntryData({
      title: '',
      message: '',
      selectedFile: '',
    });
  };

  return (
    <>
      <div>Edit Entry</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label name='title'>Title</label>
          <input
            type='text'
            name='title'
            value={entryData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label name='message'>Message</label>
          <input
            type='text'
            name='message'
            value={entryData.message}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div>
          <label name='selectedFile'>Selected File</label>
          <input
            type='text'
            name='selectedFile'
            onChange={handleChange}
          />
        </div> */}
        <button type='submit'>Submit</button>
        {id && (
          <button type='submit' onClick={handleCancel}>
            Cancel
          </button>
        )}
      </form>
    </>
  );
};

export default UpdateEntry;
