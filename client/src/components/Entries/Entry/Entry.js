import React from 'react';
import { useHistory } from 'react-router-dom';

const Entry = ({ entry }) => {
  const { title, createdAt, _id, selectedFile } = entry;
  const noImg =
    'https://images.unsplash.com/photo-1520052600632-67420194a58f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80';
  const history = useHistory();

  const openEntry = () => {
    history.push(`/entries/${_id}`);
  };
  return (
    <div className='flex flex-col gap-1'>
      <img
        src={selectedFile ? selectedFile : noImg}
        // src='https://images.unsplash.com/photo-1547389432-95b8f3c47f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1585&q=80'
        // src={selectedFile}
        className='hover:translate-x-1 h-48 md:h-60 lg:h-80 object-cover hover:-translate-y-1 delay-50 duration-100 hover:outline outline-slate-800 hover:cursor-pointer'
        alt='entry cover'
        onClick={openEntry}
      />
      <h1 className='text-black-400 text-xs md:text-sm'>
        {new Date(createdAt).toDateString()}
      </h1>
      {/* <p className='text-black-400  h-12 md:h-20 uppercase text-base md:text-lg '> */}
      <p className='text-black-400 uppercase text-base md:text-lg '>{title}</p>
    </div>
  );
};

export default Entry;
