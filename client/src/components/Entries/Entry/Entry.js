import React from 'react';

const Entry = ({ entry }) => {
  const { title, message } = entry;
  return (
    <>
      <h1>{title}</h1>
      <div>{message}</div>
    </>
  );
};

export default Entry;
