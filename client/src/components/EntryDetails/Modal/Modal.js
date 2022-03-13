import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = () => {
    setSelectedImg(null);
  };

  return (
    <div
      className='top-0 left-0 fixed w-full h-full bg-black/50'
      onClick={handleClick}
    >
      <img
        className='block max-w-[60%] max-h-[80%] my-14 mx-auto border-4 border-solid'
        src={selectedImg}
        alt='enlarged selected pic'
      />
    </div>
  );
};

export default Modal;
