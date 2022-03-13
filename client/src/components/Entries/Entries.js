import React from 'react';
import { useSelector } from 'react-redux';
import Entry from './Entry/Entry';
import { useHistory } from 'react-router-dom';

const Entries = () => {
  const { entries } = useSelector((state) => state.entriesReducer);
  const history = useHistory();

  const createEntry = () => {
    history.push('/createentry');
  };
  console.log('entry', entries);

  return (
    <div className='h-screen bg-[#E2E1E7] '>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4 py-4 px-12 bg-[#E2E1E7]'>
        <div className='flex flex-col gap-1 outline'>
          <div
            className='flex flex-col m-auto justify-center items-center hover:cursor-pointer'
            onClick={createEntry}
          >
            <h1 className='text-black-400 p-1'>Create a journal entry</h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
        </div>
        {entries.map((entry) => (
          <Entry key={entry._id} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default Entries;
