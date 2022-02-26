import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEntry } from '../../actions/entries';
import { useHistory } from 'react-router-dom';

const NewEntry = () => {
  const [entryData, setEntryData] = useState({
    title: '',
    message: '',
    selectedFile: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(createEntry({ ...entryData }, history));
    dispatch(createEntry(entryData, history));
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
      <div>NewEntry</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label name='title'>Title</label>
          <input type='text' name='title' onChange={handleChange} required />
        </div>
        <div>
          <label name='message'>Message</label>
          <input type='text' name='message' onChange={handleChange} required />
        </div>
        {/* <div>
          <label name='selectedFile'>Selected File</label>
          <input
            type='text'
            name='selectedFile'
            onChange={handleChange}
          />
        </div> */}
        <button type='submit'>Create New Entry</button>
      </form>
    </>
  );
};

export default NewEntry;
