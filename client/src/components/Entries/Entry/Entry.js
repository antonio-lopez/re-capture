import React from 'react';
import { useHistory } from 'react-router-dom';

const Entry = ({ entry }) => {
  const { title, createdAt, _id } = entry;
  const history = useHistory();

  const openEntry = () => {
    history.push(`/entries/${_id}`);
  };
  return (
    <div className='flex flex-col gap-1'>
      <img
        src='https://images.unsplash.com/photo-1547389432-95b8f3c47f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1585&q=80'
        className='hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100 hover:outline outline-slate-800 hover:cursor-pointer'
        alt='entry cover'
        onClick={openEntry}
      />
      <h1 className='text-black-400 text-sm'>
        {new Date(createdAt).toDateString()}
      </h1>
      <p className='text-black-400 text-2xl'>{title}</p>
    </div>
  );
};

export default Entry;
