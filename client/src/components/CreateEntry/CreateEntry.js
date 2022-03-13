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
      <div className='relative min-h-screen flex items-center justify-center bg-[#EDECEA] py-12 px-4 sm:px-6 lg:px-8'>
        <div className='sm:max-w-lg w-full md:p-10 bg-[#7D887C] rounded-xl z-10'>
          <form className='mt-8 space-y-3' onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 mt-5 mx-7'>
              <label className='uppercase md:text-sm text-xs text-white font-semibold'>
                Title
              </label>
              <input
                className='py-2 px-3 rounded-lg border-2 border-gray-50 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent'
                type='text'
                name='title'
                onChange={handleChange}
                required
              />
            </div>
            <div className='grid grid-cols-1 mt-5 mx-7'>
              <label className='uppercase md:text-sm text-xs text-white font-semibold'>
                Body
              </label>
              <textarea
                rows='5'
                cols='33'
                className='py-2 px-3 rounded-lg border-2 border-gray-50 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent'
                type='text'
                name='message'
                onChange={handleChange}
                required
              />
            </div>
            <div className='grid grid-cols-1 mt-5 mx-7'>
              <label className='uppercase md:text-sm text-xs text-white font-semibold mb-1'>
                Upload Photo
              </label>
              {entryData.selectedFile ? (
                <img src={entryData.selectedFile} alt='' />
              ) : (
                <div className='flex items-center justify-center w-full'>
                  <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-[#EDECEA] hover:border-[#7D887C] group'>
                    <div className='flex flex-col items-center justify-center pt-7'>
                      <svg
                        className='w-10 h-10 text-white group-hover:text-[#7D887C]'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                        ></path>
                      </svg>
                      <p className='lowercase text-sm text-gray-200 group-hover:text-[#7D887C] pt-1 tracking-wider'>
                        Select a photo
                      </p>
                    </div>
                    <div className='hidden'>
                      <FileBase64
                        type='file'
                        multiple={false}
                        onDone={({ base64 }) =>
                          setEntryData({ ...entryData, selectedFile: base64 })
                        }
                      />
                    </div>
                  </label>
                </div>
              )}
            </div>

            <div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
              <button
                onClick={handleCancel}
                className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEntry;
