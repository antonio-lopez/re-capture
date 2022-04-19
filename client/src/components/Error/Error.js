import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='bg-moss h-screen flex flex-col items-center justify-center'>
      <main>
        <div className='flex'>
          <h1 className='text-center text-2xl text-slate-100'>
            Page Not Found
          </h1>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 ml-2 text-slate-100 '
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
            />
          </svg>
        </div>

        <div className='flex items-center justify-center mt-8'>
          <Link to='/'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-20 w-20 text-slate-100 '
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Error;
