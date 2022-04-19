import React from 'react';

const UserInfo = ({ totalPosts }) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div className='bg-mischka pt-4 px-12'>
      <h1 className='text-4xl uppercase'>{user.user.name}</h1>
      <div className='relative flex py-5 items-center text-sm md:text-base w-auto md:w-1/2'>
        <div className='w-4 h-4 bg-black rounded-full flex justify-center items-center text-center text-white p-5'>
          {totalPosts}
        </div>
        <span className='flex-shrink ml-1 mr-4  text-gray-700'>Entries</span>
        <div className='flex-grow border-t border-gray-400'></div>
      </div>
    </div>
  );
};

export default UserInfo;
