import React from 'react';
import { useHistory } from 'react-router-dom';

const Entry = ({ entry }) => {
  const { title, message, _id } = entry;
  const history = useHistory();

  const openEntry = () => {
    history.push(`/entries/${entry._id}`);
  };
  return (
    <>
      <h1>{title}</h1>
      <div>{message}</div>
      <div>{_id}</div>
      <button onClick={openEntry}>Details</button>
    </>
  );
};

export default Entry;
