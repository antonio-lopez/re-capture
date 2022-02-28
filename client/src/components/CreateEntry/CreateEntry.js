import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEntry } from '../../actions/entries';
import { useHistory } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

const CreateEntry = () => {
  const [entryData, setEntryData] = useState({
    title: '',
    message: '',
    selectedFile: '',
    createdAt: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const date = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEntry(entryData, history));
    clear();
  };

  const handleChange = (e) => {
    console.log(entryData);
    setEntryData({
      ...entryData,
      createdAt: date,
      [e.target.name]: e.target.value,
    });
  };

  const clear = () => {
    setEntryData({
      title: '',
      message: '',
      selectedFile: '',
      createdAt: '',
    });
  };

  const handleCancel = () => {
    history.push('/entries');
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
        <div>
          <FileBase64
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setEntryData({ ...entryData, selectedFile: base64 })
            }
          />
        </div>
        <button type='submit'>Create New Entry</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </>
  );
};

export default CreateEntry;
