import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEntry, deleteEntry } from '../../actions/entries';
import Modal from './Modal/Modal';

const EntryDetails = () => {
  const { entry } = useSelector((state) => state.entriesReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    dispatch(getEntry(id));
  }, [id, dispatch]);

  const removeEntry = (singleEntry) => {
    dispatch(deleteEntry(singleEntry));
    history.push('/entries');
  };

  console.log(entry);
  if (!entry) return null;

  return (
    <div className='min-h-screen bg-[#E9EBDE]'>
      <main className='relative container mx-auto px-4 '>
        <div className='relative -mx-4 top-0 pt-[17%] overflow-hidden'>
          <img
            className='absolute inset-0 object-cover object-top w-full h-full filter blur'
            src={entry.selectedFile}
            alt='blurred background'
          />
        </div>

        <div className='mt-[-10%] w-1/2 mx-auto'>
          <div
            className='relative pt-[56.25%] overflow-hidden rounded-2xl'
            onClick={() => setSelectedImg(entry.selectedFile)}
          >
            <img
              className='w-full h-full absolute inset-0 object-cover'
              src={entry.selectedFile}
              alt=''
            />
          </div>
        </div>

        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}

        <article className='max-w-prose mx-auto py-8'>
          <h1 className='text-lg md:text-2xl font-bold uppercase'>
            {entry.title}
          </h1>
          <h2 className='mt-2 text-xs md:text-base text-gray-500'>
            <div>{new Date(entry.createdAt).toDateString()}</div>
            <div>{new Date(entry.createdAt).toLocaleTimeString('en-US')}</div>
          </h2>

          <p className='mt-6 text-sm md:text-base whitespace-pre-line'>
            {entry.message}
          </p>
        </article>

        <div className='flex justify-evenly pb-8'>
          <button onClick={() => history.push('/entries')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-900  hover:text-gray-700 focus:text-gray-700 '
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7 16l-4-4m0 0l4-4m-4 4h18'
              />
            </svg>
          </button>

          <button onClick={() => removeEntry(id)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-900  hover:text-gray-700 focus:text-gray-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </button>

          <button onClick={() => history.push(`/editentry/${id}`)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-900  hover:text-gray-700 focus:text-gray-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
              />
            </svg>
          </button>
        </div>

        {/* <div>
          <h1>{entry.title}</h1>
          <div>{new Date(entry.createdAt).toDateString()}</div>
          <div>{new Date(entry.createdAt).toLocaleTimeString('en-US')}</div>
          <div>{entry.message}</div>
          <img src={entry.selectedFile} alt='' />
        </div>
        <button onClick={() => history.push(`/editentry/${id}`)}>Edit</button>
        <button onClick={() => history.push('/entries')}>Home</button>
        <button onClick={() => removeEntry(id)}>Delete</button> */}
      </main>
    </div>
  );
};

export default EntryDetails;
