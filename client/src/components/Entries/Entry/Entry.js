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
        src='https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg'
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
