import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <div>Main Component</div>
      <Link to='/auth'>
        <button>Sign In</button>
      </Link>
    </>
  );
};

export default Main;
